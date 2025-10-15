import { useState } from "react";
import { incrementByAmount } from "../store/counterSlice";
import { useDispatch } from "react-redux";

// 사용자에게 값을 입력받고, 입력 값만큼 전역상태 count 증가
export default function CounterIncrementByAmount() {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(0);

  function clickHandler() {
    dispatch(incrementByAmount(payload));
    setPayload(0);
  }
  return (
    <div>
      <input
        type="number"
        value={payload}
        onChange={(e) => {
          setPayload(e.target.value);
        }}
      />
      <button onClick={() => clickHandler()}>증가</button>
    </div>
  );
}
