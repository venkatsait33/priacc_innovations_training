import { Link } from "react-router-dom";
import UseStateHookTasks from "./hooks_tasks/UseStateHookTasks";

const Home = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mt-10">
        Welcome to React Projects
      </h1>
      <p className="text-center mt-10 text-lg font-semibold">Project List</p>
      <div className="flex flex-col gap-3 items-center">
        <div className="">
          <Link to="/todo" className="text-blue-500 hover:text-blue-700">
            Todo App
          </Link>
        </div>
        <div className="">
          <Link to="/calculator" className="text-blue-500 hover:text-blue-700">
            Calculator App
          </Link>
        </div>
        <div>
          <Link to="/food" className="text-blue-500 hover:text-blue-700">
            Food App
          </Link>
        </div>
        <div>
          <Link
            to="/vendingMachine"
            className="text-blue-500 hover:text-blue-700"
          >
            vending Machine
          </Link>
        </div>
        <div>
          <Link to="/contactForm" className="text-blue-500 hover:text-blue-700">
            ContactForm
          </Link>
        </div>
        <div>
          <Link to="/tasks" className="text-blue-500 hover:text-blue-700">
            Tasks
          </Link>
        </div>
        <div>
          <Link
            to="/usestateHookTasks"
            className="text-blue-500 hover:text-blue-700"
          >
            useState HookTasks
          </Link>
        </div>
        <div>
          <Link to="/weatherApp" className="text-blue-500 hover:text-blue-700">
            Weather App
          </Link>
        </div>
        <div>
          <Link to="/todoapp" className="text-blue-500 hover:text-blue-700">
            TODO App
          </Link>
        </div>
        <div>
          <Link
            to="/practiceTask"
            className="text-blue-500 hover:text-blue-700"
          >
            React Tasks - 05-11-2025
          </Link>
        </div>
      </div>

      {/* Student Info */}
      <div className="flex flex-col gap-3 items-center">
        <h1>Tasks Date - 12-11-2025</h1>
        <Link className="text-blue-500 hover:text-blue-700" to="/students">
          Student Info App
        </Link>
        <Link className="text-blue-500 hover:text-blue-700" to="/product">
          Product Catalog
        </Link>
        <Link className="text-blue-500 hover:text-blue-700" to="/blog">
          Blogs
        </Link>
        <Link className="text-blue-500 hover:text-blue-700" to="/travel">
          Travel App{" "}
        </Link>
      </div>
    </div>
  );
};

export default Home;
