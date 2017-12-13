import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './login';
import HomePage from './home';
import UsersPage from './user';
import UserDetailPage from './user/UserDetailPage';
import Navbar from './navbar';

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="layout">
        <Navbar />
        <div className="container">
          <Component {...matchProps} />
        </div>
        <div className="footer">Built with <i className="fa fa-heart" style={{color: '#FF8A65'}}></i> By Information Services</div>
      </div>
    )} />
  )
};

class App extends Component {
  render() {
    return (
      <div>
	      <Route exact path="/" component={LoginPage} />
        <DefaultLayout exact path="/home" component={HomePage} />
        <Route exact path="/userList" component={UsersPage} />
        <DefaultLayout exact path="/user" component={UserDetailPage} />
      </div>
    );
  }
}

export default App;
