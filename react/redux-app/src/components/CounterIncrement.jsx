// counterSlice에서 increment 액션 생성자 함수
// increment : 액션 생성자 함수 -> 액션을 생성
import { increment } from "../store/counterSlice";

// useDispatch() 훅 : dispatch 함수를 생성하는 훅
// dispatch: 액션을 스토어로 보내는 함수
import { useDispatch } from "react-redux";

export default function CounterIncrement() {
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(increment());
  }
  return (
    <div>
      <button onClick={() => clickHandler()}>1 증가</button>
    </div>
  );
}
