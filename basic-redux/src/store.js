import {createStore} from 'redux';
import {reducers} from './reducer';

export function configureStore(initialState = {credo:{title:"sample"}}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();