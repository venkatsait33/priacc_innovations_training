import React from "react";
import ThemeToggle from "./ThemeToggle";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const MainUi = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          padding: 20,
          background: theme === "light" ? "#ffffff" : "#1f1f1f",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Redux Todo App</h1>

        <ThemeToggle />
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default MainUi;
