export const createNewDeck = async () => {
  console.log('IN FETCH')
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(
      data => {
        debugger
      }
      //   this.setState({
      //     isLoaded: true,
      //     items: result.items
      //   });
      // },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      //   (error) => {
      //     this.setState({
      //       isLoaded: true,
      //       error
      //     });
      //   }
    )
}
