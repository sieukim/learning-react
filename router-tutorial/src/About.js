import React from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

const About = () => {
  // const query = new URLSearchParams(location.search);
  // const showDetail = query.get('detail') === 'true';
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <p>detail은 {query.detail}입니다.</p>
    </div>
  );
};

export default About;