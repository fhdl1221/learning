import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 인증 리듀서 불러오기
import authReducer from "./authSlice";

// Redux Persist 모듈
import { persistStore, persistReducer } from "redux-persist";
// 로컬 스토리지
import storage from "redux-persist/lib/storage";

// Redux Persist 모듈 불러오기
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Persist Reducer
// Persist Reducer 설정 변수
const authPersistConfig = {
  key: "auth", // 로컬 스토리지 내 속성명(식별자)
  storage: storage, // 어떤 웹 저장소를 사용할 것인가? -> 로컬스토리지
  whitelist: ["token"], // 어떤 상태를 저장할 것인가? -> 토큰 상태만 저장
};

// Persist Reducer 생성
// persistReducer : 지속가능한 리듀서를 생성하는 함수
// authPersistConfig : 설정
// authReducer : 원본 리듀서
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persistAuthReducer, // 기존 authReducer를 persisAuthReducer로 변경
  },
  // middleware 속성 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persist 스토어 생성 및 내보내기
export const persistor = persistStore(store);
