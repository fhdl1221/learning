import { useState, useEffect } from "react";
import { getMemo, updateState } from "../utils/supabase";

export default function MemoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const data = await getMemo();
      setTodos(data);
    }
    fetchData();
  }, []);

  async function handleState(id, currentState) {
    const newState = currentState === "completed" ? "incomplete" : "completed";

    await updateState(id, newState);

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, state: newState } : todo))
    );
  }

  const filterMemo = todos.filter((todo) => {
    if (filter === "completed") return todo.state === "completed";
    if (filter === "incomplete") return todo.state === "incomplete";
    return true;
  });

  return (
    <div className="p-4 w-[60%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Memo</h1>

      <div className="flex gap-4 mb-4 border-b border-gray-400">
        <button
          className={`px-3 py-1 ${
            filter === "all" ? "border-b border-blue-500" : "border-none"
          }`}
          onClick={() => setFilter("all")}
        >
          전체
        </button>
        <button
          className={`px-3 py-1 ${
            filter === "completed" ? "border-b border-blue-500" : "border-none"
          }`}
          onClick={() => setFilter("completed")}
        >
          완료
        </button>
        <button
          className={`px-3 py-1 ${
            filter === "incomplete" ? "border-b border-blue-500" : "border-none"
          }`}
          onClick={() => setFilter("incomplete")}
        >
          미완료
        </button>
      </div>

      <ul className="space-y-2">
        {filterMemo.map((todo) => (
          <li key={todo.id} className="p-3 border rounded-lg bg-gray-50">
            <h2 className="font-semibold">{todo.title}</h2>
            <p>📅 {todo.date}</p>
            <p>⭐ {todo.priority}</p>
            <p>📂 {todo.category}</p>
            <button
              onClick={() => handleState(todo.id, todo.state)}
              className={`mt-3 text-sm px-3 py-1 rounded-lg transition ${
                todo.state === "incomplete"
                  ? "bg-blue-400 text-white hover:bg-blue-500"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              {todo.state === "completed" ? "미완료" : "완료"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
