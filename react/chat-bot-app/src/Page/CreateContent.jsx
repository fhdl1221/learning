// 기본 컨텐츠 생성형 AI
import { useState } from "react";
import MessageList from "../components/MessageList";
import ChatForm from "../components/ChatForm";

import { ai, config } from "../utils/genai";

export default function CreateContent() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (prompt.trim() === "" || isLoading === true) return;

    // 대화 내역 상태를 업데이트
    // 사용자의 프롬프트를 대화 내역에 추가(role: "user")
    // role 역할 : user라면 오른쪽에 배치, ai라면 왼쪽에 배치
    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const currentPrompt = prompt;
    setPrompt("");

    setIsLoading(true); // 요청 시작(기다리기)
    await generateAiContent(currentPrompt);
    setIsLoading(false); // 요청 종료
  }

  // AI에게 요청을 보내서 응답을 생성하는 함수
  async function generateAiContent(currentPrompt) {
    try {
      // 단순 텍스트 생성
      const response = await ai.models.generateContent({
        // 모델 정보와 contents(프롬프트)
        model: "gemini-2.5-flash",
        contents: currentPrompt,
        config: config,
      });
      console.log(response.data);

      // setPrompt(""); // 사용자 입력 프롬프트 초기화

      // messages 상태에 응답을 저장
      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* 사용자 - AI 대화 내용 출력 컴포넌트 */}
      <MessageList messages={messages}></MessageList>
      {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
      <ChatForm
        prompt={prompt} // 사용자 입력 값 관리 상태
        setPrompt={setPrompt} // 사용자 입력 값 상태 변경 함수
        isLoading={isLoading} // AI 응답 대기 상태
        onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
      ></ChatForm>
    </>
  );
}
