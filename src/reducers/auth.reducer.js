import { AUTH_USER } from '../actions';

export default function auth(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return action.user;

    default:
      return state;
  }
}
