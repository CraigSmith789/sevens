import React from 'react'

class LivePlayer extends React.Component {
  render () {
    return (
      <div>
        <button>PASS</button>
        <div className='live-hand-row' style={{ display: 'flex' }}>
          {this.props.playerOneHand.map(card => (
            <div
              key={card.value + '-' + card.suit}
              style={{ width: '75px', height: '105px' }}
            >
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
