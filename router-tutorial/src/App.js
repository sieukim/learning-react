import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
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
        <Link to='/profiles'>프로필</Link>
      </li>
    </ul>
    <hr />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/profiles' element={<Profiles />}>
        <Route path='' element={<div>사용자를 선택하세요.</div>} />
        <Route path=':username' element={<Profile />} />
      </Route>
    </Routes>
  </div>);
};

export default App;