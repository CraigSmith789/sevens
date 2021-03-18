export default function gameReducer (
  state = {
    playerOneHand: [],
    playerTwoHand: [],
    playerThreeHand: [],
    playerFourHand: [],
    players: []
  },
  action
) {
  console.log(action)
  switch (action.type) {
    case 'SHUFFLE_CARDS':
      return state
    //      return {...state, [action.num]: action.cards, player:'', last_played:{play: '', cards: []},

    case 'DEAL_CARDS':
      let newState = {
        ...state,
        playerOneHand: action.payload.cards.slice(0, 13),
        playerTwoHand: action.payload.cards.slice(13, 26),
        playerThreeHand: action.payload.cards.slice(26, 39),
        playerFourHand: action.payload.cards.slice(39)
      };
      console.log(newState)
      return newState;

    default:
      return state
  }
}
