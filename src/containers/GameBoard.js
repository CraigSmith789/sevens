import React from 'react'
import { connect } from 'react-redux'
import { makeAMove } from '../actions/makeMove'
import { reshuffleCards } from '../actions/deckActions'
import LivePlayer from '../components/LivePlayer'
import Card from '../components/Card'
import BlankCard from '../components/BlankCard'

export class GameBoard extends React.Component {
 

  render () {
    return (
      <div style={{ paddingLeft: '200px' }}>
        <div style={{ display: 'flex' }}>
          <div>
            <div className='club-row' style={{ display: 'flex' }}>
              {this.props.cards.clubsRow.map(card =>
                card.show ? <Card card={card} /> : <BlankCard />
                )}
            </div>

            <div className='heart-row' style={{ display: 'flex' }}>
              {this.props.cards.heartsRow.map(card =>
                card.show ? <Card card={card} /> : <BlankCard />
              )}
            </div>

            <div className='spade-row' style={{ display: 'flex' }}>
              {this.props.cards.spadesRow.map(card =>
                card.show ? <Card card={card} /> : <BlankCard />
              )}
            </div>

            <div className='diamond-row' style={{ display: 'flex' }}>
              {this.props.cards.diamondsRow.map(card =>
                card.show ? <Card card={card} /> : <BlankCard />
              )}
            </div>
          </div>
          <div>
            <div>
              Player 1: {this.props.cards.playerOneHand.length} cards remaining
            </div>
            <div>
              Player 2: {this.props.cards.playerTwoHand.length} cards remaining
            </div>
            <div>
              Player 3: {this.props.cards.playerThreeHand.length} cards
              remaining
            </div>
            <div>
              Player 4: {this.props.cards.playerFourHand.length} cards remaining
            </div>
          </div>
        </div>

        <br />
        <br />
        <LivePlayer playerOneHand={this.props.cards.playerOneHand} />
        <button onClick={this.props.reshuffleCards}>Start Game</button>
        <button onClick={makeAMove}>Game Simulator</button>
        
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  reshuffleCards: () => dispatch(reshuffleCards())
})

const mapStateToProps = state => ({
  cards: state
})

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard)
