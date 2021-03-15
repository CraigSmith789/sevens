import { useState } from "react"
import { getPossibleMoves } from './makeMove'
let playerOneHand = [];
let playerTwoHand = [];
let playerThreeHand = [];
let playerFourHand = [];
let players = [];

const DrawCards = async () => {
  // const [items, setItems] = useState([]);
  console.log("IN DRAW")
  fetch("https://deckofcardsapi.com/api/deck/jwsoleglkmmd/draw/?count=52")
    .then(res => res.json())
    .then(
      (data) => { dealCards(data) }

      //   this.setState({
      //     isLoaded: true,
      //     items: result.items
      //   });
      // },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      //   (error) => {
      //     this.setState({
      //       isLoaded: true,
      //       error
      //     });
      //   }
    )
}
let dealCards = (data) => {
  console.log(data)
  playerOneHand = (data.cards.slice(0, 13));
  playerTwoHand = (data.cards.slice(13, 26));
  playerThreeHand = (data.cards.slice(26, 39));
  playerFourHand = (data.cards.slice(39,));
  console.log(playerOneHand);
  console.log(playerTwoHand);
  console.log(playerThreeHand);
  console.log(playerFourHand);
  players = [playerOneHand, playerTwoHand, playerThreeHand, playerFourHand];

}


export const getPossibleMovesForPlayer = () => {
  
  let playerHand = players[0];
  console.log(playerHand);

  let movesForPlayer = [];

  let possibleMoves = getPossibleMoves();

  console.log(possibleMoves);

  playerHand.forEach((card) => {
    possibleMoves.forEach((move) => {
      if(move.value === card.value && move.suit === card.suit){
        console.log("Valid move: "+ card.suit+" "+ card.value);
        movesForPlayer.push(move);
      }
    });
  });
  console.log("Possible moves for player:")
  console.log(movesForPlayer)
  return movesForPlayer;


}

export default DrawCards;