import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div className="mb-3">
      <input
        className="border p-2 mr-2"
        placeholder="Add todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
