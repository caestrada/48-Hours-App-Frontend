import { LOAD_SESSIONS, CREATE_SESSION } from '../actions';

export default function auth(state = [], action) {
  switch(action.type) {
    case LOAD_SESSIONS:
      return action.sessions;

    case CREATE_SESSION:
      return [
        Object.assign({}, action.session), ...state     
      ];

    default:
      return state;
  }
}
