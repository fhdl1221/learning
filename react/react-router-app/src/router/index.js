// createBrowserRouter 함수 불러오기
// createBrowserRouter 함수는 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매칭
import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "./routes/rootRoutes";
import authRoutes from "./routes/authRoutes";

// 라우터 생성
const router = createBrowserRouter([
  // 스프레드 연산자로 경로 배열을 복사
  ...rootRoutes,
  ...authRoutes,
]);

// 라우터 내보내기
export default router;
