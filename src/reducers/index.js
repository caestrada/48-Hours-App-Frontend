import { combineReducers } from 'redux';
import auth from './auth.reducer';
import sessions from './session.reducer';

const rootReducer = combineReducers({
  auth,
  sessions,
});

export default rootReducer;