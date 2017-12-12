const api = 'http://...';

// TODO: use axios to retrieve data from DB.
export const authUser = (user) => {
    if(user.email === 'a@a.com' && user.password === '48hours') {
      return Promise.resolve(user);
    }
    else {
      return Promise.reject('ERROR: credentials not found! (email: a@a.com, pass: 48hours)');
    }
}