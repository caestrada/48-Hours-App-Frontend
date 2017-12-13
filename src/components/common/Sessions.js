import React from 'react';

const Sessions = ({sessions}) => {
  return (
    <div>
      <h1>Sessions</h1>
      {sessions && sessions.map(session => (
        <div key={session._id} className="col-xs-12 col-sm-6">
          {/* {session.name} */}
          <div className="thumbnail">
            <div className="caption">
              <h3>{session.title}</h3>
              <p>...</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sessions;