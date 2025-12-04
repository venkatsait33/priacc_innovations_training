import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.length === 0 && <p>No todos yet.</p>}

      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between p-2 border mb-2">
          <span
            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>

          <button
            className="bg-red-500 text-white px-3 py-1"
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            X
          </button>
        </div>
      ))}

      {todos.length > 0 && (
        <button
          className="bg-gray-600 text-white px-4 py-2 mt-3"
          onClick={() => dispatch({ type: "CLEAR_ALL" })}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default TodoList;
