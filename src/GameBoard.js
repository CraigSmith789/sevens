import React from 'react'
import { createNewDeck } from './actions/deckActions'
import { drawCards } from './actions/deckActions'
import { makeAMove } from './makeMove'
import { reshuffleCards } from './actions/deckActions'

export default class GameBoard extends React.Component {
  state = {}
  componentDidMount = async () => {
    // createNewDeck()
    //  drawCards()
    // reshuffleCards()
  }
  render () {
    return (
      <div>
        {' '}
        Game Board
        <button onClick={createNewDeck}>New Game</button>
        <button onClick={reshuffleCards}>Reshuffle</button>
        <button onClick={drawCards}>Deal Cards</button>
        <button onClick={makeAMove}>Make A Move For Player 1</button>
      </div>
    )
  }
}
