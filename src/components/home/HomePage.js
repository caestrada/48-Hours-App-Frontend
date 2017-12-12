import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../common/UserList';
import Sessions from '../common/Sessions';


class HomePage extends Component {
  state = {
    isManager: this.props.isManager,
  }

  viewUser = (user) => {
    this.props.history.push('/user', user);
  }

  render() {
    const { isManager, directReport, sessions } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <h1>Home Page</h1>          
        </div>
        <div className="row">
          <div className={`col-xs-${isManager && 8 || 12}`}><Sessions sessions={sessions} /></div>
          {isManager && <div className={'col-xs-4'}><UserList directReport={directReport} viewUser={this.viewUser}/></div>}
        </div>   
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { auth, sessions } = state;
  let isManager = (auth.direct_reports !== undefined && auth.direct_reports.length === 0) ? false : true;
  let directReport = isManager ? auth.direct_reports : [];


  return {
    auth,
    isManager,
    directReport,
    sessions,
  }  
}

export default connect(mapStateToProps)(HomePage);