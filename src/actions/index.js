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
            .then(auth => dispatch(loginUser(auth)))
            .catch(err => {throw(err)});
  }
}