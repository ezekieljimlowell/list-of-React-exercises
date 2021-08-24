import {combineReducers} from 'redux';
export const credo = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_CREDO':
      return action.credo;
    case 'CLOSE_CREDO':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  credo,
});