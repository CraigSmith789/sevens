import React from 'react'
import { connect } from 'react-redux'
import { makeAMove } from '../actions/makeMove'
import { reshuffleCards } from '../actions/deckActions'
import LivePlayer from '../components/LivePlayer'


let clubsRow = [
  {
    value: 'AC',
    image: 'https://deckofcardsapi.com/static/img/AC.png',
    show: false
  },

  {
    value: '2C',
    image: 'https://deckofcardsapi.com/static/img/2C.png',
    show: false
  },

  {
    value: '3C',
    image: 'https://deckofcardsapi.com/static/img/3C.png',
    show: false
  },

  {
    value: '4C',
    image: 'https://deckofcardsapi.com/static/img/4C.png',
    show: false
  },

  {
    value: '5C',
    image: 'https://deckofcardsapi.com/static/img/5C.png',
    show: false
  },

  {
    value: '6C',
    image: 'https://deckofcardsapi.com/static/img/6C.png',
    show: false
  },

  {
    value: '7C',
    image: 'https://deckofcardsapi.com/static/img/7C.png',
    show: true
  },

  {
    value: '8C',
    image: 'https://deckofcardsapi.com/static/img/8C.png',
    show: false
  },

  {
    value: '9C',
    image: 'https://deckofcardsapi.com/static/img/9C.png',
    show: false
  },

  {
    value: '0C',
    image: 'https://deckofcardsapi.com/static/img/0C.png',
    show: false
  },

  {
    value: 'JC',
    image: 'https://deckofcardsapi.com/static/img/JC.png',
    show: false
  },

  {
    value: 'QC',
    image: 'https://deckofcardsapi.com/static/img/QC.png',
    show: false
  },

  {
    value: 'KC',
    image: 'https://deckofcardsapi.com/static/img/KC.png',
    show: false
  }
]

let heartsRow = [
  {
    value: 'AH',
    image: 'https://deckofcardsapi.com/static/img/AH.png',
    show: false
  },

  {
    value: '2H',
    image: 'https://deckofcardsapi.com/static/img/2H.png',
    show: false
  },

  {
    value: '3H',
    image: 'https://deckofcardsapi.com/static/img/3H.png',
    show: false
  },

  {
    value: '4H',
    image: 'https://deckofcardsapi.com/static/img/4H.png',
    show: false
  },

  {
    value: '5H',
    image: 'https://deckofcardsapi.com/static/img/5H.png',
    show: false
  },

  {
    value: '6H',
    image: 'https://deckofcardsapi.com/static/img/6H.png',
    show: false
  },

  {
    value: '7H',
    image: 'https://deckofcardsapi.com/static/img/7H.png',
    show: true
  },

  {
    value: '8H',
    image: 'https://deckofcardsapi.com/static/img/8H.png',
    show: false
  },

  {
    value: '9H',
    image: 'https://deckofcardsapi.com/static/img/9H.png',
    show: false
  },

  {
    value: '0H',
    image: 'https://deckofcardsapi.com/static/img/0H.png',
    show: false
  },

  {
    value: 'JH',
    image: 'https://deckofcardsapi.com/static/img/JH.png',
    show: false
  },

  {
    value: 'QH',
    image: 'https://deckofcardsapi.com/static/img/QH.png',
    show: false
  },

  {
    value: 'KH',
    image: 'https://deckofcardsapi.com/static/img/KH.png',
    show: false
  }
]

let spadesRow = [
  {
    value: 'AS',
    image: 'https://deckofcardsapi.com/static/img/AS.png',
    show: false
  },

  {
    value: '2S',
    image: 'https://deckofcardsapi.com/static/img/2S.png',
    show: false
  },

  {
    value: '3S',
    image: 'https://deckofcardsapi.com/static/img/3S.png',
    show: false
  },

  {
    value: '4S',
    image: 'https://deckofcardsapi.com/static/img/4S.png',
    show: false
  },

  {
    value: '5S',
    image: 'https://deckofcardsapi.com/static/img/5S.png',
    show: false
  },

  {
    value: '6S',
    image: 'https://deckofcardsapi.com/static/img/6S.png',
    show: false
  },

  {
    value: '7S',
    image: 'https://deckofcardsapi.com/static/img/7S.png',
    show: true
  },

  {
    value: '8S',
    image: 'https://deckofcardsapi.com/static/img/8S.png',
    show: false
  },

  {
    value: '9S',
    image: 'https://deckofcardsapi.com/static/img/9S.png',
    show: false
  },

  {
    value: '0S',
    image: 'https://deckofcardsapi.com/static/img/0S.png',
    show: false
  },

  {
    value: 'JS',
    image: 'https://deckofcardsapi.com/static/img/JS.png',
    show: false
  },

  {
    value: 'QS',
    image: 'https://deckofcardsapi.com/static/img/QS.png',
    show: false
  },

  {
    value: 'KS',
    image: 'https://deckofcardsapi.com/static/img/KS.png',
    show: false
  }
]

let diamondsRow = [
  {
    value: 'AD',
    image: 'https://deckofcardsapi.com/static/img/aceDiamonds.png',
    show: false
  },

  {
    value: '2D',
    image: 'https://deckofcardsapi.com/static/img/2D.png',
    show: false
  },

  {
    value: '3D',
    image: 'https://deckofcardsapi.com/static/img/3D.png',
    show: false
  },

  {
    value: '4D',
    image: 'https://deckofcardsapi.com/static/img/4D.png',
    show: false
  },

  {
    value: '5D',
    image: 'https://deckofcardsapi.com/static/img/5D.png',
    show: false
  },

  {
    value: '6D',
    image: 'https://deckofcardsapi.com/static/img/6D.png',
    show: false
  },

  {
    value: '7D',
    image: 'https://deckofcardsapi.com/static/img/7D.png',
    show: true
  },

  {
    value: '8D',
    image: 'https://deckofcardsapi.com/static/img/8D.png',
    show: false
  },

  {
    value: '9D',
    image: 'https://deckofcardsapi.com/static/img/9D.png',
    show: false
  },

  {
    value: '0D',
    image: 'https://deckofcardsapi.com/static/img/0D.png',
    show: false
  },

  {
    value: 'JD',
    image: 'https://deckofcardsapi.com/static/img/JD.png',
    show: false
  },

  {
    value: 'QD',
    image: 'https://deckofcardsapi.com/static/img/QD.png',
    show: false
  },

  {
    value: 'KD',
    image: 'https://deckofcardsapi.com/static/img/KD.png',
    show: false
  }
]

export class GameBoard extends React.Component {
  state = {}

  render () {
    return (
      <div>
        <div className='club-row' style={{display:'flex'}}>
          {clubCards}
        </div>

        <div className='heart-row' style={{display:'flex'}}>
          {heartCards}
        </div>

        <div className='spade-row' style={{display:'flex'}}>
          {spadeCards}
        </div>

        <div className='diamond-row' style={{display:'flex'}}>
          {diamondCards}
        </div>
        
        <br/>
        <br/>
        <LivePlayer />
        <button onClick={this.props.reshuffleCards}>Start Game</button>
        <button onClick={makeAMove}>Game Simulator</button>
        {/* <button onClick={this.props.reshuffleCards}>THUNK</button> */}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  reshuffleCards: () => dispatch(reshuffleCards())
})

const mapStateToProps = (state) => ({
    cards: state,
  
});


let clubCards = clubsRow.map(card => (
  <div id={card.value} style={{width:'75px', height:'105px'}}>
    <img src={card.image} style={{width:'75px', height:'105px'}}  />
  </div>
));
let heartCards = heartsRow.map(card => (
  <div id={card.value} style={{width:'75px', height:'105px'}}>
    <img src={card.image} style={{width:'75px', height:'105px'}}  />
  </div>
));
let spadeCards = spadesRow.map(card => (
  <div id={card.value} style={{width:'75px', height:'105px'}}>
    <img src={card.image} style={{width:'75px', height:'105px'}}  />
  </div>
));
let diamondCards = diamondsRow.map(card => (
  <div id={card.value} style={{width:'75px', height:'105px'}}>
    <img src={card.image} style={{width:'75px', height:'105px'}}  />
  </div>
));

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)
