export const reshuffleCards = () => dispatch => {
  fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/shuffle/')
    .then(res => res.json())
    .then(data => dispatch({ type: 'SHUFFLE_CARDS', payload: data }))
}

// import { useState } from 'react'
// import { getPossibleMoves } from './makeMove'
let playerOneHand = []
let playerTwoHand = []
let playerThreeHand = []
let playerFourHand = []
let players = []

export const drawCards = async () => {
  // const [items, setItems] = useState([]);
  console.log('IN DRAW')
  fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/draw/?count=52')
    .then(res => res.json())
    .then(data => {
      dealCards(data)
    })
}
let dealCards = data => {
  console.log(data)
  playerOneHand = data.cards.slice(0, 13)
  playerTwoHand = data.cards.slice(13, 26)
  playerThreeHand = data.cards.slice(26, 39)
  playerFourHand = data.cards.slice(39)
  console.log(playerOneHand)
  console.log(playerTwoHand)
  console.log(playerThreeHand)
  console.log(playerFourHand)
  players = [playerOneHand, playerTwoHand, playerThreeHand, playerFourHand]
}

export const getPlayers = () => {
  return players
}

// export const createNewDeck = async () => {
//   console.log('IN FETCH')
//   fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res => res.json())
//     .then(data => {
//       debugger
//     })
// }
