import { createSlice } from "@reduxjs/toolkit";

// 초기 전역 상태
const initialState = {
  count: 0,
};

// 슬라이스 생성 -> 리듀서와 액션을 생성
const counterSlice = createSlice({
  name: "action",
  initialState: initialState, // 초기 상태 정의 속성
  // 리듀서와 액션을 정의
  reducers: {
    // 상태 count를 1증가하는 액션 작성
    increment: (state) => {
      // 매개변수 state : 현재 슬라이스에 정의된 상태를 저장(initialState)
      state.count = state.count + 1; // 불변성을 지키지 않음(상태 직접 수정) why? -> immer라이브러리를 내장하고 있어 상태를 직접 수정해도 자동으로 불변성 지켜짐
    },
    // 상태 count를 특정 값만큼 증가시키는 리듀서와 액션
    incrementByAmount: (state, action) => {
      // 매개변수 action : 상태를 어떻게 변경할지 정보를 저장한 객체
      // payload 속성의 값은 문자열, 그래서 Number로 형변환
      state.count = state.count + Number(action.payload);
    },
    // 상태 count를 0으로 만드는 리듀서와 액션 코드 작성
    reset: (state) => {
      state.count = 0;
    },
  },
});

// 액션 내보내기
export const { increment, incrementByAmount, reset } = counterSlice.actions;
// 리듀서 내보내기
export default counterSlice.reducer;
