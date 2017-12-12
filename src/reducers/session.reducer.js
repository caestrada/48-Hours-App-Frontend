import { LOAD_SESSIONS } from '../actions';

export default function auth(state = [], action) {
  switch(action.type) {
    case LOAD_SESSIONS:
      return action.sessions;

    default:
      return state;
  }
}
