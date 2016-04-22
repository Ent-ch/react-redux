import { SET_INITIAL_STATE } from '../actions/home';

let initialState = {
  success: false
};

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIAL_STATE:
      return { ...state, success:action.success}

    default:
      return state;
  }
};
