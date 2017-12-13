import React from 'react';
import Menu, { Item as MenuItem, ItemGroup as MenuItemGroup } from 'rc-menu';
import 'rc-menu/assets/index.css';

const UserList = ({directReport, viewUser}) => {
  return (
    <div>
      <h1>User List</h1>
      <Menu style={{ margin: 20, width: 300 }}
        onClick={(data) =>  viewUser(directReport.filter(x => data.key)[0])}
        >
        <MenuItemGroup title="Direct Reports" key="employees">
          {directReport && directReport.map(user => 
            <MenuItem key={user.id}>
              <img 
                className="media-object" 
                style={{width: 64}}
                src={require('../../images/uno_logo.png')} />
                {user.fullname}
            </MenuItem>
          )}
        </MenuItemGroup>
      </Menu>
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