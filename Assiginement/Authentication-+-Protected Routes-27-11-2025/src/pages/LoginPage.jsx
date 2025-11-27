import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeToken = "fake-jwt-token-12345";
    login(fakeToken);
    navigate("/dashboard");
    setData({
      email: "",
      password: "",
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "auto",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid white",
        borderRadius: "10px",
      }}
    >
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label>
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
