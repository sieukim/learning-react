import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  return (<div>
    <h3>사용자 목록:</h3>
    <ul>
      <li>
        <Link to='/profiles/velopert'>velopert</Link>
      </li>
      <li>
        <Link to='/profiles/vvsos1'>vvsos1</Link>
      </li>
    </ul>
    <Outlet />
  </div>);
};

export default Profiles;