
import { GUESS, FEEDBACK, RESET } from '../actions/actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  //auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
}

const guessReducer = (state=initialState, action) => {
  if (action.type === GUESS) {
    const newState = { ...state, guesses: [...state.guesses, action.guess]};
    return newState;
  }
  return state;
}

const feedbackReducer = (state=initialState, action) => {
  if (action.type === FEEDBACK) {
    const newState = { ...state, feedback: action.feedback };
    return newState;
  }
  return state;
}

const resetReducer = (state=initialState, action) => {
  if (action.type === RESET) {
    const newState = { ...state};
    return newState;
  }
  return state;
}

export { guessReducer, feedbackReducer, resetReducer }