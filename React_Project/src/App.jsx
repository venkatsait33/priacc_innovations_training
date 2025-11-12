import "./App.css";
import Calculator from "./components/Calculator";
import HomePage from "./components/foodApp/HomePage";
import Home from "./components/Home";
import TodoApp from "./components/todoApp";
import { Route, Routes } from "react-router-dom";
import VendingMachine from "./components/vendingMachine/VendingMachine";
import ContactForm from "./components/contactForm/ContactForm";
import Index from "./components/condetionalRendering_ListItems";
import UseStateHookTasks from "./components/hooks_tasks/UseStateHookTasks";
import WeatherApp from "./components/weatherApp/WeatherApp";
import Tasks from "./components/tasks/Tasks";
import StudentHomePage from "./components/routing-tasks/task-1-student_info/StudentHomePage";
import StudentDetailsPage from "./components/routing-tasks/task-1-student_info/StudentDetailsPage";
import StudentListPage from "./components/routing-tasks/task-1-student_info/StudentListPage";
import Product from "./components/routing-tasks/task-2-Product_catalog_app/Product";
import ProductDetails from "./components/routing-tasks/task-2-Product_catalog_app/ProductDetails";
import ProductList from "./components/routing-tasks/task-2-Product_catalog_app/ProductList";
import Blog from "./components/routing-tasks/task-3-Blog_Reader_App/Blog";
import BlogDetails from "./components/routing-tasks/task-3-Blog_Reader_App/BlogDetails";
import TravelApp from "./components/routing-tasks/task-4-City_Travel_Guide_App/TravelApp";
import CityDetails from "./components/routing-tasks/task-4-City_Travel_Guide_App/CityDetails";
import TravelCites from "./components/routing-tasks/task-4-City_Travel_Guide_App/TravelCites";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/food" element={<HomePage />} />
        <Route path="/vendingMachine" element={<VendingMachine />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/tasks" element={<Index />} />
        <Route path="/weatherapp" element={<WeatherApp />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/usestateHookTasks" element={<UseStateHookTasks />} />
        <Route path="/practiceTask" element={<Tasks />} />
        {/*  Students info  */}
        <Route path="/students" element={<StudentHomePage />} />
        <Route path="/students/list" element={<StudentListPage />} />
        <Route path="/students/:id" element={<StudentDetailsPage />} />
        {/* Product catalog app */}
        <Route path="/product" element={<Product />} />
        <Route path="/product/list" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        {/* Blog APP */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        {/* Travel App */}
        <Route path="/travel" element={<TravelApp />} />
        <Route path="/travel/city" element={<CityDetails />} />
        <Route path="/travel/city/:name" element={<TravelCites />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
