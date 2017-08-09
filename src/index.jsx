import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import TodoList from './TodoList';
import TodoState from './TodoState';

render(
  <TodoList state={TodoState} />,
  document.getElementById('root')
);
