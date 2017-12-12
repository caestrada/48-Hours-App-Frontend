import React from 'react';

const UserList = ({directReport, viewUser}) => {
  return (
    <div>
      <h1>User List</h1>
      {directReport && directReport.map(user => (
        <a key={user.id} className="media" onClick={() => viewUser(user)}>
          <div className="media-left">
            <div href="#">
              <img 
                className="media-object" 
                style={{width: 64}}
                src={require('../../images/uno_logo.png')} />
            </div>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{user.fullname}</h4>
            ...
          </div>         
        </a>
      ))}
    </div>
  );
};

export default UserList;