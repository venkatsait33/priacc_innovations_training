import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<h1>404 Page Not Found</h1>} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
