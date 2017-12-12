import React, { Component } from 'react';
import LoginPage from './login';
import HomePage from './home';
import UsersPage from './user';
import UserDetailPage from './user/UserDetailPage';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/userList" component={UsersPage} />
        <Route exact path="/user" component={UserDetailPage} />
      </div>
    );
  }
}

export default App;
