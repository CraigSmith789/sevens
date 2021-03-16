export const reshuffleCards = async () => {
  console.log('IN Reshuffle')
  fetch('https://deckofcardsapi.com/api/deck/jwsoleglkmmd/shuffle/')
    .then(res => res.json())
    .then(
      data => {
        console.log(data)
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
