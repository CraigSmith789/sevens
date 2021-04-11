import React from 'react'
import { makeAMove } from '../actions/makeMove'
import Card from '../components/Card'

class LivePlayer extends React.Component {
  handleCardClick = card => () => {
    makeAMove(card)
  }

  render () {
    return (
      <div>
        <h1>Player 1: </h1>
        <div className='live-hand-row' style={{ display: 'flex' }}>
          {this.props.playerOneHand.map(card => (
            <button onClick={this.handleCardClick(card)}>
              <Card card={card} />
            </button>
          ))}
        </div>
        <button onClick={this.handleCardClick('PASS')}>PASS</button>
      </div>
    )
  }
}

export default LivePlayer
