import React, { useState } from "react";
import { postMemo } from "../utils/supabase";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";
  const isAi = message.role === "ai";

  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  let data = null;

  // JSON 메시지 파싱
  if (isAi) {
    try {
      data = JSON.parse(message.content);
    } catch {
      data = null;
    }
  }

  async function handleSave() {
    if (!data || !data.isMemo) return;
    setSaving(true);

    try {
      await postMemo({
        title: data.title,
        date: data.date,
        time: data.time || null,
        priority: data.priority,
        category: data.category,
      });
      setSaved(true);
    } catch (error) {
      console.log(error);
    }

    setSaving(false);
  }

  return (
    <div className="flex justify-center">
      <div
        className={`mt-4 w-[60%] flex ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        {isUser ? (
          <div className="p-3 bg-blue-500 text-white rounded-2xl rounded-br-none shadow-sm max-w-[80%]">
            {message.content}
          </div>
        ) : data ? (
          data.isMemo ? (
            <div className="p-5 bg-gray-200 rounded-2xl rounded-bl-none shadow-sm max-w-[90%]">
              <h3 className="font-semibold text-gray-800 mb-2">
                📝 {data.title || "제목 없음"}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>📅 마감일 :</strong> {data.date || "마감 기한 없음"}
                </p>
                <p>
                  <strong>⭐ 우선순위 :</strong> {data.priority}
                </p>
                <p>
                  <strong>📂 카테고리 :</strong> {data.category || "미지정"}
                </p>
              </div>
              <button
                onClick={handleSave}
                disabled={saved || saving}
                className={`mt-3 text-sm px-3 py-1 rounded-lg transition ${
                  saved
                    ? "bg-yellow-500 text-white cursor-default"
                    : saving
                    ? "bg-gray-500 text-white cursor-wait"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {saved ? "저장됨" : saving ? "저장중.." : "등록"}
              </button>
            </div>
          ) : (
            <div className="p-3 bg-gray-200 text-gray-900 rounded-2xl rounded-bl-none shadow-sm max-w-[80%]">
              할 일과 관련이 없습니다
            </div>
          )
        ) : (
          <div className="p-3 bg-red-100 text-red-800 rounded-2xl max-w-[80%]">
            JSON 파싱 실패: {message.content}
          </div>
        )}
      </div>
    </div>
  );
}
