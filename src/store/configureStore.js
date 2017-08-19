// let redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';

import {
  addTodoReducer,
  tokenReducer
} from '../reducers/reducers';

export const configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    form: reduxFormReducer,
    token: tokenReducer,
    addTodo: addTodoReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};










