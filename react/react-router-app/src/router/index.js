// createBrowserRouter 함수 불러오기
// createBrowserRouter 함수는 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매칭
import { createBrowserRouter } from "react-router-dom";

import rootRoutes from "./routes/rootRoutes";
import authRoutes from "./routes/authRoutes";

import NotFound from "../pages/NotFound";

// 라우터 생성
const router = createBrowserRouter([
  // 스프레드 연산자로 경로 배열을 복사
  ...rootRoutes,
  ...authRoutes,
  {
    // 모든 주소에 매핑되는 path
    // (중요)항상 다른 경로 설정의 최하단에 배치해야 한다 (if~else의 else느낌)
    path: "*", // asterisk(별표) : 모든 것에 매핑(일치)되는 특수문자
    Component: NotFound,
  },
]);

// 라우터 내보내기
export default router;
