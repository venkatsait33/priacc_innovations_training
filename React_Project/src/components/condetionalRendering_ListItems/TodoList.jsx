import React from "react";

const TodoList = () => {
  const todos = [
    { id: 1, task: "Complete homework", completed: true },
    { id: 2, task: "Buy groceries", completed: false },
    { id: 3, task: "Read a book", completed: true },
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`py-2 ${
              todo.completed ? "text-green-600" : "text-red-600"
            }`}
          >
            {todo.task} — {todo.completed ? "✔️" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
