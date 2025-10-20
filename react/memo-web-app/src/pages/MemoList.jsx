import { useState, useEffect } from "react";
import { getMemo } from "../utils/supabase";

export default function MemoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMemo();
      setTodos(data);
    }
    fetchData();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">저장된 메모</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="p-3 border rounded-lg bg-gray-50">
            <h2 className="font-semibold">{todo.title}</h2>
            <p>📅 {todo.date}</p>
            <p>⭐ {todo.priority}</p>
            <p>📂 {todo.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
