// RootLayout과 AuthLayout에 중첩된 페이지 경로 배열을 정의

import PATHS from "../../constants/paths";

import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Signup from "../../pages/AuthPages/Signup";
import Login from "../../pages/AuthPages/Login";

const authRoutes = [
  {
    path: PATHS.AUTH.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
    ],
  },
];

export default authRoutes;
