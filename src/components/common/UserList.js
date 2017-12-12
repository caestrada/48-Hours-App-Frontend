import React from 'react';

const UserList = ({directReport}) => {
  console.log('UserList', directReport);
  return (
    <div>
      <h1>User List</h1>
      {directReport && directReport.map(user => (
        <div key={user.id} className="media">
          <div className="media-left">
            <a href="#">
              <img 
                className="media-object" 
                style={{width: 64}}
                src={require('../../images/uno_logo.png')} />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{user.fullname}</h4>
            ...
          </div>         
        </div>
      ))}
    </div>
  );
};

export default UserList;