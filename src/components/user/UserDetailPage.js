import React, { Component } from 'react';
import * as api from '../../util/api';
import Sessions from '../common/Sessions';
import TextInput from '../common/TextInput';



const NewSessionForm = ({onChange, newSession, toggleTopic}) => {
  return (
    <div>
      <h1>New Session</h1>
      <form>
        <TextInput
          htmlId="title"
          label="Title"
          name="title"
          onChange={onChange}
          required
        />
        <div className="checkbox" onChange={onChange}>
          <label>
            <input type="checkbox" name="topic-1" value="Common topic 1" />
            Common topic 1
          </label>
        </div>
        <div className="checkbox" onChange={onChange}>
          <label>
            <input type="checkbox" name="topic-2" value="Common topic 2" />
            Common topic 2
          </label>
        </div>
        <div className="checkbox" onChange={onChange}>
          <label>
            <input type="checkbox" name="topic-3" value="Common topic 3" />
            Common topic 3
          </label>
        </div>
        <TextInput
          htmlId="custom-topic"
          label="Custom Topic"
          name="custom-topic"
          onChange={onChange}
        />
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Create Session" onClick={newSession} />
      </form>
    </div>
  );
};

class UserDetailPage extends Component {
  state = {
    sessions: [],
    createSessionForm: false,
    newSession: {
      title: '',
      topic: [],
    },
  }
  componentDidMount() {
    const user = this.props.location.state
    api.getSessionsFromUser(user.id)
    .then(sessions => {
      this.setState({sessions});
    })
  }

  toggleNewSessionForm = () => {
    this.setState((prevState => ({
      createSessionForm: !prevState.createSessionForm
    })))
  }

  onChange = (event) => {
    console.log('event', event.target);
    const session = this.state.newSession;

    if(event.target.type === 'checkbox' && event.target.checked) {
      console.log('checkbox!!!!');
      session['topic'].push(event.target.value);
    }
    else if(event.target.type === 'checkbox' && !event.target.checked) {
      var index = session['topic'].indexOf(event.target.value);
      if (index > -1) {
        session['topic'].splice(index, 1);
      }
    }
    else {
      session[event.target.name] = event.target.value;
    }
    this.setState({newSession: session});
  }

  newSession = (event) => {
    console.log('session', this.state.newSession);
    event.preventDefault();
  }

  render() {
    const user = this.props.location.state;
    const {sessions, createSessionForm} = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>User: {user.fullname}</h1>
        <button 
          className="btn btn-lg btn-primary"
          onClick={this.toggleNewSessionForm}>
            Add Session
        </button>
        <div>
        {createSessionForm 
          ? <NewSessionForm onChange={this.onChange} newSession={this.newSession} />
          : <Sessions sessions={sessions} />
        }
        </div>
      </div>
    );
  }
}

export default UserDetailPage;