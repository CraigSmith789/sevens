import React from 'react'
import { makeAMove } from '../actions/makeMove'
import Card from '../components/Card'

class LivePlayer extends React.Component {
  handleCardClick = card => () => {
    makeAMove(card)
  }

  // compare = (a, b) => {
  //   if (a > b) return 1;
  //   if (b > a) return -1;

  //   return 0;
  // }

  render () {
    console.log(this.props.playerOneHand)
    this.props.playerOneHand.sort(function (a, b) {
      return a.code - b.code
    })
    console.log(this.props.playerOneHand)
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
