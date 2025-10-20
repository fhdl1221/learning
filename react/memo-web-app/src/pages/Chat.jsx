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
    <div className="flex-grow flex flex-col relative">
      <MessageList messages={messages}></MessageList>
      <ChatForm
        prompt={prompt}
        setPrompt={setPrompt}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      ></ChatForm>
    </div>
  );
}
