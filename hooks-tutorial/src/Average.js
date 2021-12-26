import React, { useState, useMemo, useCallback } from 'react';

/*
  useCallback은 주로 렌더링 성능을 최적화해야 하는 상황에서 사용한다.
  이를 이용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.
  첫 번째 파라미터로 생성할 함수를 넣고,
  두 번째 파라미터로 배열을 넣으면 된다. 이 때, 배열의 요소의 값이 바뀐 경우에만 함수를 새로 생성한다.
 */

const getAverage = numbers => {
  console.log('평균값 계산 중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => {
          <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b>{avg}
      </div>
    </div>
  );
};

export default Average;