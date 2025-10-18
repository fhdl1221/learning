import { useState } from "react";
import ChatForm from "../components/ChatForm";
import MessageList from "../components/MessageList";

import { chat, config } from "../utils/genai";
export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (prompt.trim() === "" || isLoading === true) return;

    setMessages((prev) => [...prev, { role: "user", content: prompt }]);

    const currentPrompt = prompt;
    setPrompt("");

    setIsLoading(true);
    generateAiContent(currentPrompt);
    setIsLoading(false);
  }

  async function generateAiContent(currentPrompt) {
    try {
      const response = await chat.sendMessage({
        message: currentPrompt,
        config: config,
      });
      console.log(response.data);

      setMessages((prev) => [...prev, { role: "ai", content: response.text }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-full flex flex-col relative">
      {/* 사용자 - AI 대화 내용 출력 컴포넌트 */}
      <MessageList messages={messages}></MessageList>
      {/* 사용자의 프롬프트 작성 폼 컴포넌트 */}
      <ChatForm
        prompt={prompt} // 사용자 입력 값 관리 상태
        setPrompt={setPrompt} // 사용자 입력 값 상태 변경 함수
        isLoading={isLoading} // AI 응답 대기 상태
        onSubmit={handleSubmit} // form 요소 제출 이벤트 핸들러 함수
      ></ChatForm>
    </div>
  );
}
