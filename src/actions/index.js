import * as api from '../util/api';

// ::::: AUTH
export const AUTH_USER = 'AUTH_USER';
export const loginUser = (user) => ({
  type: AUTH_USER,
  user,
});
export const loginUserThunk = (user) => {
  return (dispatch) => {
    return  api.authUser(user)
            .then(auth => {
              dispatch(loginUser(auth))
              dispatch(loadSessionsThunk(auth.id))
            })
            .catch(err => {throw(err)});
  }
}

// ::::: SESSIONS
export const LOAD_SESSIONS = 'LOAD_SESSIONS';
export const loadSessions = (sessions) => ({
  type: LOAD_SESSIONS,
  sessions,
});
export const loadSessionsThunk = (userId) => {
  return (dispatch) => {
    return  api.getSessionsFromUser(userId)
            .then(sessions => dispatch(loadSessions(sessions)))
            .catch(err => {throw(err)});
  }
}

export const CREATE_SESSION = 'CREATE_SESSION';
export const createSession = (session) => ({
  type: CREATE_SESSION,
  session,
});
export const createSessionThunk = (newSession) => {
  console.log('@@@ createSessionThunk');
  return (dispatch) => {
    return  api.createSession(newSession)
            .then(session => {
              dispatch(createSession(session));
              return session;
            })
            .catch(err => {throw(err)});
  }
}