import React from "react";

const Child = ({ showMessage }) => {
  return (
    <button
      onClick={showMessage}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Click Me (Child)
    </button>
  );
};

const ParentToChild = () => {
  const handleMessage = () => {
    alert("Hello from Parent Component!");
  };

  return (
    <div className="p-4 text-center">
      <h1 className="mb-2 font-bold">Parent Component</h1>
      <Child showMessage={handleMessage} />
    </div>
  );
};

export default ParentToChild;
