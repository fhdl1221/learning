import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
});

const responseSchema = {
  type: "object",
  properties: {
    isMemo: {
      type: "boolean",
      description: "할 일, 메모, 업무, 계획 등 관련 여부",
    },
    title: {
      type: "string",
      description: "메모의 제목 또는 주요 내용",
    },
    date: {
      type: "string",
      description: "마감 날짜(YYYY-MM-DD)",
    },
    time: {
      type: "string",
      description: "시간(HH:MM)",
    },
    priority: {
      type: "string",
      enum: ["low", "normal", "high"],
      description: "할 일의 중요도 또는 우선순위",
    },
    category: {
      type: "string",
      description: "메모의 분류 (예: work, personal, study 등)",
    },
  },
  required: ["isMemo", "title", "date", "time", "priority", "category"],
  additionalProperties: false,
};

const systemInstruction = [
  `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
  "당신은 할 일 관리 전문가입니다. 오직 할 일이나 업무 관련 내용만 처리합니다.",
  "JSON 형식으로 응답합니다.",
  "응답 객체에는 isMemo, title, dueDate, priority, category 속성이 포함되어야 합니다.",
  "사용자의 입력이 할 일이 아닌 일반 대화, 인사, 질문 등인 경우에는 isMemo를 false로 설정하고 다른 속성은 null로 설정합니다.",
  "사용자의 입력을 이해할 수 없는 경우에도 isMemo를 false로 설정합니다.",
  "할 일로 판단될 경우에는 isMemo를 true로 설정하고 다음 정보를 제공합니다:",
  " - title: 할 일의 주요 내용 (문장 요약)",
  " - dueDate: 마감 날짜 또는 시간 (YYYY-MM-DD 형식)",
  " - priority: low, normal, high 중 하나로 설정",
  " - category: work, personal, study, health, etc 중 하나로 설정",
  "모든 문자열은 한국어로 작성합니다.",
];

const config = {
  responseMimeType: "application/json",
  responseJsonSchema: responseSchema,
  systemInstruction: systemInstruction,
};

export { ai, chat, config };
