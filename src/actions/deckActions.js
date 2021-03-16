export const reshuffleCards = async () => {
  console.log('IN Reshuffle')
  fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/shuffle/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}

export const createNewDeck = async () => {
  console.log('IN FETCH')
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
      debugger
    })
}
