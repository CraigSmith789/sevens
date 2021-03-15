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

let possibleMoves = [{ value: "7", suit: "SPADES" }, { value: "7", suit: "HEARTS" },
{ value: "7", suit: "CLUBS" }, { value: "7", suit: "DIAMONDS" }]


export const getPossibleMoves = () => {
  return possibleMoves;
}

export const updatePossibleMoves = () => {
  // this variable will be taken in as a parameter
  let moveMade = { value: "7", suit: "HEARTS" }


  //TODO: double check that the move is valid

  let cardIndex = cardValues.findIndex(value => value === moveMade.value)
  console.log("cardIndex: " + cardIndex);

  //add new possibilities, if any
  if (cardIndex === 6) {
    // card is a 7, increment and decrement
    possibleMoves.push(increment(moveMade.suit, cardIndex));
    possibleMoves.push(decrement(moveMade.suit, cardIndex));

  } else if (cardIndex < 6 && cardIndex !== 0) {
    // decrement possible move
    possibleMoves.push(decrement(moveMade.suit, cardIndex));

  } else {
    if (cardIndex !== 12) {
      //increment possible move
      possibleMoves.push(increment(moveMade.suit, cardIndex));
    }

  }

  //remove this card from possible moves
  possibleMoves = possibleMoves.filter(move => !(move.value === moveMade.value && move.suit === moveMade.suit))
  console.log(possibleMoves)

}

export const increment = (suit, index) => {
  return { value: `${cardValues[index + 1]}`, suit: suit }
}

export const decrement = (suit, index) => {
  return { value: `${cardValues[index - 1]}`, suit: suit }
}

