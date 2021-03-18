import React from 'react'
import { connect } from 'react-redux'
import store from './../store'

const LivePlayer = () => {
  return (
    <div>
      <button>PASS</button>
      <div className='live-hand-row' style={{ display: 'flex' }}>
        {livePlayerHand}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  playerOneCards: state.playerOneHand
})

let state = store.getState()
let livePlayer = state.playerOneHand
console.log('hi:')
console.log(livePlayer)
let livePlayerHand = livePlayer.map(card => (
  <div id={card.value} style={{ width: '75px', height: '105px' }}>
    <img src={card.image} style={{ width: '75px', height: '105px' }} />
  </div>
))

export default connect(mapStateToProps, null)(LivePlayer)
