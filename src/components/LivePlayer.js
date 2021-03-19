import React from 'react'
import { connect } from 'react-redux'
import store from './../store'

class LivePlayer extends React.Component {
  render () {
    return (
      <div>
        <button>PASS</button>
        <div className='live-hand-row' style={{ display: 'flex' }}>
          {this.props.playerOneHand.map(card => (
            <div id={card.value} style={{ width: '75px', height: '105px' }}>
              <img
                src={card.image}
                style={{ width: '75px', height: '105px' }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default LivePlayer
