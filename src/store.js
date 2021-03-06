
import { createStore } from 'redux';

import guessReducer from './reducers/reducer';

export default createStore(guessReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());