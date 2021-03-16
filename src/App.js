import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import NavBar from './components/NavBar'
import GameBoard from './containers/GameBoard'
import Rules from './components/Rules'
import Stats from './components/Stats'
import { reshuffleCards } from './actions/deckActions'

function App () {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <header>Welcome to Sevens</header>
        <Route exact path='/' render={() => <GameBoard />} />
        <Route exact path='/rules' render={() => <Rules />} />
        <Route exact path='/stats' render={() => <Stats />} />
      </div>
    </Router>
  )
}
function mapDispatchToProps(dispatch){
  return { reshuffleCards: () => dispatch(reshuffleCards()) }
}

export default connect(null, mapDispatchToProps)(App) 
