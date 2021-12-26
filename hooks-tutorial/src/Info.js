import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  /*
    useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며,
    두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.

    두 번째 파라미터 배열에 빈 배열을 넣으면 마운트될 때만 실행하고,
    특정 값이 업데이트될 때만 실행하고 싶으면 특정 변수를 넣는다.

    컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면
    useEffect에서 뒷정리 함수를 반환해주어야 한다.
   */

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;