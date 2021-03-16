import React from 'react'
import { createNewDeck } from './newDeckApi'
import DrawCards from './drawCardsApi'
import { makeAMove } from './makeMove'

import { reshuffleCards } from './reshuffleApi'
export default class GameBoard extends React.Component {
  state = {}
  componentDidMount = async () => {
    // createNewDeck()
    //  DrawCards()
    // reshuffleCards()
  }
  render () {
    return (
      <div>
        {' '}
        Game Board
        <button onClick={createNewDeck}>New Game</button>
        <button onClick={reshuffleCards}>Reshuffle</button>
        <button onClick={DrawCards}>Deal Cards</button>
        <button onClick={makeAMove}>Make A Move For Player 1</button>
      </div>
    )
  }
}
