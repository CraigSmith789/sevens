import React from 'react'
import Card from '../components/Card'

class LivePlayer extends React.Component {
  render () {
    return (
      <div>
        <div className='live-hand-row' style={{ display: 'flex' }}>
        <h1>Player 1: </h1>
          {this.props.playerOneHand.map(card => (
            <Card card={card} />
          ))}
        </div>
      </div>
    )
  }
}

export default LivePlayer
