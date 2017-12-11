import React, { Component } from 'react';
import LoginPage from './login';
import HomePage from './home';
import UsersPage from './user';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/userList" component={UsersPage} />
      </div>
    );
  }
}

export default App;
