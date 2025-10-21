export default function MemoItem({ todo, handleState, handleDelete }) {
  return (
    <li className="flex justify-between items-center px-6 py-4 border border-gray-200 rounded-lg bg-white">
      <div>
        <h2 className="font-semibold mb-2">{todo.title}</h2>
        <p>📆 {todo.date}</p>
        <p>🕒 {todo.time}</p>
        <p>⭐ {todo.priority}</p>
        <p>📂 {todo.category}</p>
      </div>

      <div className="flex flex-col h-32">
        <button
          onClick={() => handleDelete(todo.id)}
          className="text-right text-sm px-4 py-2 text-red-400 focus:text-red-700 transition-colors"
        >
          삭제
        </button>
        <div className="mt-5 items-center justify-center">
          <button
            onClick={() => handleState(todo.id, todo.state)}
            className={`text-sm px-4 py-2 rounded-lg transition ${
              todo.state === "incomplete"
                ? "bg-blue-200 text-blue-800 hover:bg-blue-500 hover:text-white"
                : "bg-yellow-200 text-yellow-800 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            {todo.state === "completed" ? "❎미완료" : "✅완료"}
          </button>
        </div>
      </div>
    </li>
  );
}
