import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import GameBoard from './containers/GameBoard'
import Rules from './components/Rules'
import Stats from './components/Stats'



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
export default App
