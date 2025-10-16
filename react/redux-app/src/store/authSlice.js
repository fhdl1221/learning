// 액세스 토큰 상태 관리
// 로그인, 회원가입, 로그아웃 같은 네트워크 비동기 처리

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 로그인 요청을 보낼 인증 서버에 대한 정보
const SUPABASE_URL = "https://jfsjmxtokcazzpykrxwp.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmc2pteHRva2NhenpweWtyeHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDE4NjksImV4cCI6MjA3NTc3Nzg2OX0.n-IAryEgUti5atr30MGszQ-fzStuW3BZDRMuaPPIefw";

// 회원가입 비동기 처리
const signup = createAsyncThunk(
  "auth/signup",
  // 비동기 처리 함수(async)
  async (data, { rejectWithValue }) => {
    // 매개변수 data : 액션의 페이로드 역할
    // 실제로 data 변수에 저장될 데이터 -> 회원가입을 위해 필요한 데이터
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/signup`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          // supabase 기준
          // 회원가입을 위해 필요한 데이터(email, password)
          email: data.email,
          password: data.password,
        },
      };
      const response = await axios(config);
      // 비동기 처리를 성공했을 때의 데이터
      return response.data;
    } catch (error) {
      // 비동기처리를 실패했을 때의 데이터
      return rejectWithValue(error.response.data);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
        data: {
          email: data.email,
          password: data.password,
        },
      };

      const response = await axios(config);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// 로그아웃 비동기처리
const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, getState }) => {
    try {
      const config = {
        url: `${SUPABASE_URL}/auth/v1/logout`,
        method: "POST",
        headers: {
          "Content-type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          // 사용자 인증 정보
          // 누가 로그아웃을 하는지에 대한 정보 -> 토큰
          Authorization: `Bearer ${getState().auth.token}`,
        },
      };
      const response = await axios(config);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// 비동기 처리 3개의 상태 : 대기, 성공, 실패

// 초기 상태
const initialState = {
  token: null,
  error: null,
  isSignup: false,
};
// 슬라이스(리듀서, 액션) 생성
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 회원가입 성공 여부를 초기화(false)
    resetIsSignup: (state) => {
      state.isSignup = false;
    },
  },
  // 위에서 정의한 비동기 처리 함수(액션)을 처리할 리듀서
  extraReducers: (builder) => {
    // 각 비동기 처리에 대한 대기(pending), 성공(fulfilled), 실패(reject) 처리 로직
    builder
      .addCase(signup.fulfilled, (state) => {
        // signup 비동기 처리가 성공(fulfilled)일 때 실행되는 콜백함수
        state.isSignup = true;
      })
      .addCase(signup.rejected, (state, action) => {
        // action.payload는 위에 있는 return rejectWithValue(error.response.data)
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        // login 비동기 처리가 성공일 때 실행되는 콜백 함수
        state.token = action.payload["access_token"];
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
      });
  },
});

export const { resetIsSignup } = authSlice.actions;
export default authSlice.reducer;
export { signup, login, logout };
