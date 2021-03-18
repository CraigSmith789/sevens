import React from 'react'
import { connect } from 'react-redux'
import { makeAMove } from '../actions/makeMove'
import { reshuffleCards } from '../actions/deckActions'

import LivePlayer from '../components/LivePlayer'

export class GameBoard extends React.Component {
  state = {}

  render () {
    return (
      <div>
        <LivePlayer />
        <button onClick={this.props.reshuffleCards}>Start Game</button>
        <button onClick={makeAMove}>Game Simulator</button>
        {/* <button onClick={this.props.reshuffleCards}>THUNK</button> */}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  reshuffleCards: () => dispatch(reshuffleCards()),
});

function mapStateToProps(state) {
  return {
      gameReducer : state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)
