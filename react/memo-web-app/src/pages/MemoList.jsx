import { useState, useEffect } from "react";
import { getMemo, updateState, deleteMemo } from "../utils/supabase";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import OrderButtons from "../components/OrderButtons";
import List from "../components/List";

export default function MemoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

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

  async function handleDelete(id) {
    await deleteMemo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  const priorityMaps = { low: 1, normal: 2, high: 3 };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.state === "completed";
      if (filter === "incomplete") return todo.state === "incomplete";
      return true;
    })
    .sort((a, b) => {
      let keyA = a[sortKey];
      let keyB = b[sortKey];

      if (sortKey === "date") {
        keyA = new Date(keyA);
        keyB = new Date(keyB);
      }

      if (sortKey === "priority") {
        keyA = priorityMaps[a.priority];
        keyB = priorityMaps[b.priority];
      }

      if (keyA < keyB) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (keyA > keyB) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    })
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-4 w-[60%] mx-auto">
      <div className="flex items-center justify-between mt-4 mb-4">
        <h1 className="text-2xl font-bold">My Memo</h1>
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
      </div>
      <div className="flex items-center justify-between mb-4">
        <FilterButtons filter={filter} setFilter={setFilter} />
        <OrderButtons
          sortKey={sortKey}
          setSortKey={setSortKey}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        ></OrderButtons>
      </div>
      <List
        todos={filteredTodos}
        handleState={handleState}
        handleDelete={handleDelete}
      />
    </div>
  );
}
