import React, { Component } from 'react';
import * as api from '../../util/api';
import Sessions from '../common/Sessions';

class UserDetailPage extends Component {
  state = {
    sessions: [],
  }
  componentDidMount() {
    const user = this.props.location.state
    api.getSessionsFromUser(user.id)
    .then(sessions => {
      this.setState({sessions});
    })
  }

  render() {
    const user = this.props.location.state;
    const {sessions} = this.state;
    return (
      <div>
        <h1>User: {user.fullname}</h1>
        <Sessions sessions={sessions} />
      </div>
    );
  }
}

export default UserDetailPage;