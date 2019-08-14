import ACTION from "js/action_constants";

function home(state = {}, action) {
  let tempState = Object.assign({}, state);
  switch (action.type) {
    case ACTION.HOME.LOADHOMEDONE:
      tempState = Object.assign({}, state);
      return tempState;

    default:
      return state;
  }
}
export default home;
