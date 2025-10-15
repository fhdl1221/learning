import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 인증 리듀서 불러오기
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
