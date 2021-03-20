import store from './../store'
import { fetchStats } from './../components/Stats'
const cardValues = [
  'ACE',
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

let players = []

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
  setTimeout(() => {
    makeMoveCPU(0)
    setTimeout(() => {
      makeMoveCPU(1)
      setTimeout(() => {
        makeMoveCPU(2)
        setTimeout(() => {
          makeMoveCPU(3)
          setTimeout(() => {
            makeMoveCPU(0)
            setTimeout(() => {
              makeMoveCPU(1)
              setTimeout(() => {
                makeMoveCPU(2)
                setTimeout(() => {
                  makeMoveCPU(3)
                  setTimeout(() => {
                    makeMoveCPU(0)
                    setTimeout(() => {
                      makeMoveCPU(1)
                      setTimeout(() => {
                        makeMoveCPU(2)
                        setTimeout(() => {
                          makeMoveCPU(3)
                        }, 1000)
                      }, 1000)
                    }, 1000)
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}

export const makeMoveCPU = playerNumber => {
  let state = store.getState()
  players = [
    state.playerOneHand,
    state.playerTwoHand,
    state.playerThreeHand,
    state.playerFourHand
  ]
  let moves = getPossibleMovesForPlayer(playerNumber)
  let hand = players[playerNumber]

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

    //check for winner
    if (updatedHand.length === 0) {
      console.log('player ' + (playerNumber + 1) + ' wins')
      endGame(playerNumber)
    }
    console.log(updatedHand)

    //Update the player's hand in state
    updateHandState(playerNumber, updatedHand)
  }
}

const endGame = playerNumber => {
  updateStats(playerNumber + 1)
}

const updateStats = winningPlayer => {
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  fetch('http://localhost:3001/stats/' + winningPlayer, configObj)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      fetchStats()
    })
}

const updateHandState = (playerNumber, updatedHand) => {
  store.dispatch({
    type: 'UPDATE_HAND_' + (playerNumber + 1),
    newHand: updatedHand
  })
}

export const playCard = move => {
  // Add played card to game board
  let cardIndex = cardValues.findIndex(value => value === move.value)
  store.dispatch({ type: 'UPDATE_' + move.suit, index: cardIndex })
  console.log('playing the ' + move.value + ' of ' + move.suit)

  // update available all moves
  updatePossibleMoves(move)
}

// Not using this yet
export const makeMoveHuman = move => {
  let moves = getPossibleMovesForPlayer()
  if (moves.length === 0) {
    console.log('No available moves. Player must pass.')
  }
}

export const updatePossibleMoves = moveMade => {
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
  let playerHand = players[playerNumber]
  console.log(playerHand)

  let movesForPlayer = []

  let possibleMoves = getPossibleMoves()

  console.log(possibleMoves)

  // loop through comparing all cards against all moves
  playerHand.forEach(card => {
    possibleMoves.forEach(move => {
      if (move.value.toUpperCase() === card.value && move.suit === card.suit) {
        console.log('Valid move: ' + card.suit + ' ' + card.value)
        movesForPlayer.push(move)
      }
    })
  })
  console.log('Possible moves for player:')
  console.log(movesForPlayer)
  return movesForPlayer
}
