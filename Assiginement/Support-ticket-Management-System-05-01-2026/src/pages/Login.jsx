import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slice/authSlice";
import { nanoid } from "@reduxjs/toolkit";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [role, setRole] = useState("user");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = data.email;
    const dispatchData = { data, role, id };

    // 🔹 Navigate based on role
    if (role === "user") {
      navigate("/user/dashboard");
    } else if (role === "admin") {
      navigate("/ ");
    }
    dispatch(setUser(dispatchData));
  };

  return (
    <div className="flex justify-center items-center flex-col p-10 w-screen h-screen gap-3">
      <h1 className="text-3xl font-semibold">Login</h1>

      <div className="border border-accent p-3 rounded-xl shadow-md">
        <form onSubmit={handleSubmit} className="max-w-3xl w-full">
          <div className="card shadow-xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  onChange={handleChange}
                />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  onChange={handleChange}
                />

                {/* Role Selection */}
                <div className="flex gap-4 items-center mt-2">
                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      className="radio"
                      checked={role === "user"}
                      onChange={handleRoleChange}
                    />
                    User
                  </label>

                  <label className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      className="radio"
                      checked={role === "admin"}
                      onChange={handleRoleChange}
                    />
                    Admin
                  </label>
                </div>

                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
