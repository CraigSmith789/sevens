import React from 'react';
import {createNewDeck} from './newDeckApi';
import DrawCards from './drawCardsApi';
import {getPossibleMovesForPlayer} from './drawCardsApi';

import {reshuffleCards} from './reshuffleApi';
import {updatePossibleMoves} from './makeMove'
export default class GameBoard extends React.Component{

state = {
  
}
componentDidMount = async () => {
// createNewDeck()
//  DrawCards()
// reshuffleCards()


 }
render() {
  return (
    <div> Game Board 
    <button onClick={createNewDeck}>New Game</button>
    <button onClick={reshuffleCards}>Reshuffle</button>
    <button onClick={DrawCards}>Deal Cards</button>
    <button onClick={updatePossibleMoves}>Avail Moves</button>

    <button onClick={getPossibleMovesForPlayer}>Avail For Player 1</button>


    </div>

  )

}

}
