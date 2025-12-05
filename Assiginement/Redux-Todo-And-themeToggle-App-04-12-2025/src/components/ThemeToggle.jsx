import { useDispatch, useSelector } from "react-redux";

const ThemeToggle = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <button
        className="bg-purple-500 text-white px-4 py-2"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle Theme ({theme})
      </button>
    </div>
  );
};

export default ThemeToggle;
