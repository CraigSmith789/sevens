
export const reshuffleCards = () => dispatch => {
  fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/shuffle/').then(
    fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/draw/?count=52')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({ type: 'DEAL_CARDS', payload: data })
      })
  )
}

