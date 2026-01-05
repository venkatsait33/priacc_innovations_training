import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserDashboard from "./components/UserDashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/create" element={<UserPage />} />
        <Route path="/*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/admin/dashboard" element={<AdminPage />} />
      </Routes>
    </div>
  );
};
export default App;
