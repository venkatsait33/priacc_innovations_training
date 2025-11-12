import React from "react";
import FetchUsers from "./FetchUsers";
import ResponsiveNavbar from "./ResponsiveNavbar";
import ParentToChild from "./ParenToChild";
import ConditionalRender from "./ConditionalRender";
import CounterExample from "./CounterExample";

const Tasks = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <CounterExample />
      <ParentToChild />
      <ConditionalRender />
      <FetchUsers />
    </div>
  );
};

export default Tasks;
