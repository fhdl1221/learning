import { useState, useEffect } from "react";
import { getMemo, updateState } from "../utils/supabase";
import FilterButtons from "../components/FilterButtons";
import List from "../components/List";

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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.state === "completed";
    if (filter === "incomplete") return todo.state === "incomplete";
    return true;
  });

  return (
    <div className="p-4 w-[60%] mx-auto">
      <h1 className="text-2xl font-bold mb-6 mt-3">My Memo</h1>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <List todos={filteredTodos} handleState={handleState} />
    </div>
  );
}
