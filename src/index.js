import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import store from './store';

import Game from './components/game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
