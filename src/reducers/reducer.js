
import { GUESS, FEEDBACK, RESET, AURAL_STATUS } from '../actions/actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

export default (state=initialState, action) => {
  if (action.type === GUESS) {
    //const newState = { ...state, guesses: [...state.guesses, action.guess]};
    //const newState = Object.assign({}, state, {guesses: [...state.guesses, action.guess]});
    return Object.assign({}, state, { guesses: [...state.guesses, action.guess] })
    // return newState;
  }
  else if (action.type === FEEDBACK) {
    const newState = { ...state, feedback: action.feedback };
    return newState;
  }

  else if (action.type === AURAL_STATUS) {
    const newState = { ...state, auralStatus: action.status };
    return newState;
  }

  else if (action.type === RESET) {
    // const newState = { ...state };
    return Object.assign({}, initialState);
    //return newState;
  }
  else {
    return state;
  }
}