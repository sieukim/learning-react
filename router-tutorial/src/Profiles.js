import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
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
    <Routes>
      <Route path='' element={<div>사용자를 선택해주세요</div>} />
      <Route path=':username' element={<Profile />} />
    </Routes>
  </div>);
};

export default Profiles;