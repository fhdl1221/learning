import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // 라우터 설정을 애플리케이션에 적용할 컴포넌트(Provider)
import router from "./router"; // 라우터 설정 불러오기
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router 속성 : 어떤 라우터 설정을 사용할 것인지 */}
    <RouterProvider router={router} />
  </StrictMode>
);
