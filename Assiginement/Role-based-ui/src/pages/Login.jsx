import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // store role (for future use)
    localStorage.setItem("role", role);

    if (role === "employee") {
      navigate("/employee/dashboard");
    } else if (role === "admin") {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Login as</h1>

        <div className="flex flex-col gap-4">
          <button
            className="btn btn-primary"
            onClick={() => handleLogin("employee")}
          >
            Employee
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleLogin("admin")}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
