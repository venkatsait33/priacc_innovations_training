import React, { useState, useEffect } from "react";

const LocalTodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Load saved todos when component mounts
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Local To-Do App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a task..."
          className="border p-2 w-full rounded-l-md"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, i) => (
          <li
            key={i}
            className="flex justify-between items-center border-b py-2"
          >
            <span
              onClick={() => toggleTodo(i)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(i)} className="text-red-500">
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalTodoApp;
