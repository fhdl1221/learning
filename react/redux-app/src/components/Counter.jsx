import { useSelector } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter);

  // 전역 상태 count
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      전역 상태 count의 값 : {count}
    </div>
  );
}
