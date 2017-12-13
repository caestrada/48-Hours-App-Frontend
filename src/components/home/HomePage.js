import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../common/UserList';
import Sessions from '../common/Sessions';
import DashCard from '../common/DashCard';


class HomePage extends Component {
  state = {
    isManager: this.props.isManager,
  }

  viewUser = (user) => {
    this.props.history.push('/user', user);
  }

  render() {
    const { auth, isManager, directReport, sessions } = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <DashCard user={auth}/>
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