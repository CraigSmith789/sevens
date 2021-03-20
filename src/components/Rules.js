import React from 'react'

const Rules = () => {
  return (
    <div>
      <h1>How To Play</h1>
      <img
        src='https://deckofcardsapi.com/static/img/7C.png'
        style={{ width: '75px', height: '105px' }}
      />
      <img
        src='https://deckofcardsapi.com/static/img/7D.png'
        style={{ width: '75px', height: '105px' }}
      />
      <img
        src='https://deckofcardsapi.com/static/img/7S.png'
        style={{ width: '75px', height: '105px' }}
      />
      <img
        src='https://deckofcardsapi.com/static/img/7H.png'
        style={{ width: '75px', height: '105px' }}
      />
      <p>
        There are many variations of the game. We will be playing the simple
        basic version.
        <p>All cards are dealt to the four players (13 cards each).</p>
        <p>To begin play, a player must play a 7, or pass.</p>
        <p>
          Play continues with each player either playing a 7 or adding to an
          already played suit.
        </p>
        <p>If a player has a playable card, it must be played.</p>
        <p>The first player to play all of their cards wins!</p>
      </p>
    </div>
  )
}
export default Rules
