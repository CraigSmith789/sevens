export default function gameReducer (

  state = {},
action) {

  console.log(action)
  switch (action.type){

    case 'SHUFFLE_CARDS':
      return state;
  }
  
}
