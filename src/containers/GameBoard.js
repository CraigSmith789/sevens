import React from 'react'
import { connect } from 'react-redux'
import { drawCards } from '../actions/deckActions'
import { makeAMove } from '../actions/makeMove'
import { reshuffleCards } from '../actions/deckActions'

export class GameBoard extends React.Component {
  state = {}

  render () {
    return (
      <div>
        
        <button onClick={this.props.reshuffleCards}>Reshuffle</button>
        <button onClick={drawCards}>Deal Cards</button>
        <button onClick={makeAMove}>Game Simulator</button>
        {/* <button onClick={this.props.reshuffleCards}>THUNK</button> */}
      </div>
    )
  }
}
function mapDispatchToProps (dispatch) {
  return { reshuffleCards: () => dispatch(reshuffleCards()) }
}

export default connect(null, mapDispatchToProps)(GameBoard)
