import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

/*
  mapStateToProps: 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
 */
const mapStateToProps = state => ({
  number: state.counter.number,
});

/*
  mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
 */
const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  }, decrease: () => {
    dispatch(decrease());
  },
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
// (CounterContainer);

/*
  위 주석처럼 함수를 만들고 사용할 수도 있고
  아래와 같이 익명 함수를 사용하여도 됨
  두 번째 파라미터의 경우 아예 객체 형태로 넣어주어도 됨
 */
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  },
)(CounterContainer);