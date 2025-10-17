import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Chat from "../pages/Chat";
import MemoList from "../pages/MemoList";
import PrivateLayout from "../layouts/PrivateLayout";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        Component: PrivateLayout,
        children: [
          {
            path: "/chat",
            Component: Chat,
          },
          {
            path: "/memo-list",
            Component: MemoList,
          },
        ],
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
