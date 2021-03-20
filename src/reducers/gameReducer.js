export default function gameReducer (
  state = {
    playerOneHand: [],
    playerTwoHand: [],
    playerThreeHand: [],
    playerFourHand: [],
    players: [],
    stats: [],
    clubsRow: [
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
        show: false
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
    ],

    heartsRow: [
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
        show: false
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
    ],

    spadesRow: [
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
        show: false
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
    ],

    diamondsRow: [
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
        show: false
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
      }
      console.log(newState)
      return newState

    case 'UPDATE_CLUBS':
      let clubs = state.clubsRow
      let cIndex = action.index
      let newCIndex = { ...clubs[cIndex], show: true }
      let newClub = [
        ...clubs.slice(0, cIndex),
        newCIndex,
        ...clubs.slice(cIndex + 1)
      ]
      console.log(newClub)
      let newClubState = {
        ...state,
        clubsRow: newClub
      }
      return newClubState

    case 'UPDATE_SPADES':
      let spades = state.spadesRow
      let sIndex = action.index
      let newSIndex = { ...spades[sIndex], show: true }
      let newSpade = [
        ...spades.slice(0, sIndex),
        newSIndex,
        ...spades.slice(sIndex + 1)
      ]
      console.log(newSpade)
      let newSpadeState = {
        ...state,
        spadesRow: newSpade
      }
      return newSpadeState

    case 'UPDATE_HEARTS':
      let hearts = state.heartsRow
      let hIndex = action.index
      let newHIndex = { ...hearts[hIndex], show: true }
      let newHeart = [
        ...hearts.slice(0, hIndex),
        newHIndex,
        ...hearts.slice(hIndex + 1)
      ]
      console.log(newHeart)
      let newHeartState = {
        ...state,
        heartsRow: newHeart
      }
      return newHeartState

    case 'UPDATE_DIAMONDS':
      let diamonds = state.diamondsRow
      let dIndex = action.index
      let newDIndex = { ...diamonds[dIndex], show: true }
      let newDiamond = [
        ...diamonds.slice(0, dIndex),
        newDIndex,
        ...diamonds.slice(dIndex + 1)
      ]
      console.log(newDiamond)
      let newDiamondState = {
        ...state,
        diamondsRow: newDiamond
      }
      return newDiamondState

    case 'UPDATE_HAND_1':
      return { ...state, playerOneHand: action.newHand }

    case 'UPDATE_HAND_2':
      return { ...state, playerTwoHand: action.newHand }

    case 'UPDATE_HAND_3':
      return { ...state, playerThreeHand: action.newHand }

    case 'UPDATE_HAND_4':
      return { ...state, playerFourHand: action.newHand }

    case 'FETCH_STATS':
      return { ...state, stats: action.stats }

    default:
      console.log('default case')
      return state
  }
}
