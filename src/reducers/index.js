import counterReducer from './Counter';
import loggedReducer from './IsLogged';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
})

export default rootReducers;