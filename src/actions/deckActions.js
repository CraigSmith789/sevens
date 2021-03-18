
export const reshuffleCards = () => dispatch => {
  fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/shuffle/')
    .then(
      fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/draw/?count=52')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          dispatch({ type: 'DEAL_CARDS', payload: data })
        })
    )
    //.then(data => dispatch({ type: 'SHUFFLE_CARDS', payload: data }))
}

// import { useState } from 'react'
// import { getPossibleMoves } from './makeMove'
// let playerOneHand = []
// let playerTwoHand = []
// let playerThreeHand = []
// let playerFourHand = []
// let players = []

// export const drawCards = async () => {
//   // const [items, setItems] = useState([]);
//   console.log('IN DRAW')
//   fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/draw/?count=52')
//     .then(res => res.json())
//     .then(data => {

//     })
// }

// export const dealCards = data => dispatch => {
//   console.log(data)
//   let playerOneHand = data.cards.slice(0, 13)
//   let playerTwoHand = data.cards.slice(13, 26)
//   let playerThreeHand = data.cards.slice(26, 39)
//   let playerFourHand = data.cards.slice(39)
//   console.log(playerOneHand)
//   console.log(playerTwoHand)
//   console.log(playerThreeHand)
//   console.log(playerFourHand)
//   let players = [playerOneHand, playerTwoHand, playerThreeHand, playerFourHand]
//   return dispatch({ type: 'DEAL_CARDS', payload: players })
//}



// export const createNewDeck = async () => {
//   console.log('IN FETCH')
//   fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(res => res.json())
//     .then(data => {
//       debugger
//     })
// }
