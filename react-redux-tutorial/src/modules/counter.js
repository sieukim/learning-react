/*
  '모듈 이름/액션 이름' 형태로 액션 타입을 정의
 */
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/*
  액션 생성 함수 정의
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/*
  모듈의 초기 상태 정의
 */
const initialState = {
  number: 0,
};

/*
  리듀서 함수 정의
 */
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;