import { createStore } from 'redux';

import { guessReducer, feedbackReducer, resetReducer } from './reducers/reducer';

const rootReducer = combineReducers({
  guessReducer,
  feedbackReducer,
  resetReducer
});

export default createStore(rootReducer);