import { getPlayers } from './actions/deckActions'

const cardValues = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'JACK',
  'QUEEN',
  'KING'
]

let cardsOnBoard = []

let possibleMoves = [
  { value: '7', suit: 'SPADES' },
  { value: '7', suit: 'HEARTS' },
  { value: '7', suit: 'CLUBS' },
  { value: '7', suit: 'DIAMONDS' }
]

export const getPossibleMoves = () => {
  return possibleMoves
}

//this only exists for a test. it is connected to the button
export const makeAMove = () => {
  makeMoveCPU(0)
  makeMoveCPU(1)
  makeMoveCPU(2)
  makeMoveCPU(3)
}

export const makeMoveCPU = playerNumber => {
  let moves = getPossibleMovesForPlayer(playerNumber)
  let hand = getPlayers()[playerNumber]
  if (moves.length === 0) {
    console.log('No available moves. Player must pass.')
  } else {
    //play first card - can add more logic here later
    let moveMade = moves[0]
    playCard(moveMade)
    //remove card from hand
    let updatedHand = hand.filter(
      move => !(move.value === moveMade.value && move.suit === moveMade.suit)
    )
    console.log(updatedHand)
    //THIS IS WHERE YOU UPDATE STATE FOR THE PLAYER'S HAND
    return updatedHand
  }
}
export const playCard = move => {
  //TODO: if playing the card makes them have 0 cards, end the game
  // TODO: convert move to card then add it to the board
  console.log('playing the ' + move.value + ' of ' + move.suit)
  // update available moves
  updatePossibleMoves(move)
}

export const makeMoveHuman = move => {
  let moves = getPossibleMovesForPlayer()
  if (moves.length === 0) {
    console.log('No available moves. Player must pass.')
  }
}

export const updatePossibleMoves = moveMade => {
  //TODO: double check that the move is valid

  let cardIndex = cardValues.findIndex(value => value === moveMade.value)

  //add new possibilities, if any
  if (cardIndex === 6) {
    // card is a 7, increment and decrement
    possibleMoves.push(increment(moveMade.suit, cardIndex))
    possibleMoves.push(decrement(moveMade.suit, cardIndex))
  } else if (cardIndex < 6 && cardIndex !== 0) {
    // decrement possible move
    possibleMoves.push(decrement(moveMade.suit, cardIndex))
  } else {
    if (cardIndex !== 12) {
      //increment possible move
      possibleMoves.push(increment(moveMade.suit, cardIndex))
    }
  }

  //remove this card from possible moves
  possibleMoves = possibleMoves.filter(
    move => !(move.value === moveMade.value && move.suit === moveMade.suit)
  )
  console.log('Updated possible moves:')
  console.log(possibleMoves)
}

export const increment = (suit, index) => {
  return { value: `${cardValues[index + 1]}`, suit: suit }
}

export const decrement = (suit, index) => {
  return { value: `${cardValues[index - 1]}`, suit: suit }
}

export const getPossibleMovesForPlayer = playerNumber => {
  let playerHand = getPlayers()[playerNumber]
  console.log(playerHand)

  let movesForPlayer = []

  let possibleMoves = getPossibleMoves()

  console.log(possibleMoves)

  playerHand.forEach(card => {
    possibleMoves.forEach(move => {
      if (move.value === card.value && move.suit === card.suit) {
        console.log('Valid move: ' + card.suit + ' ' + card.value)
        movesForPlayer.push(move)
      }
    })
  })
  console.log('Possible moves for player:')
  console.log(movesForPlayer)
  return movesForPlayer
}
