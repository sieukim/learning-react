import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (<div>
    <ul>
      <li>
        <Link to='/'>홈</Link>
      </li>
      <li>
        <Link to='/about'>소개</Link>
      </li>
      <li>
        <Link to='/profile/velopert'>velopert 프로필</Link>
      </li>
      <li>
        <Link to='/profile/vvsos1'>vvsos1 프로필</Link>
      </li>
    </ul>
    <hr />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile/:username' element={<Profile />} />
    </Routes>
  </div>);
};

export default App;