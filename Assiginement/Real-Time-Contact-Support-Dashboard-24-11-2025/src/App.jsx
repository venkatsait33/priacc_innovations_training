import React, { useState } from "react";
import { Loader } from "./components/LOader";
import ContactForm from "./components/ContactForm";
import AdminDashboard from "./pages/AdminDashboard";
import { ToastContainer } from "react-toastify";
import { registerLoaderSetter } from "./axios/axiosConfig";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  registerLoaderSetter(setLoading);
  return (
    <>
      <Loader show={loading} />

      <div className="flex flex-col w-full item-center justify-center mx-auto h-full container  ">
        <h1 className=" text-3xl font-semibold text-center mt-4">
          Real-Time Contact Support Dashboard
        </h1>
        <ContactForm />
        <div className="divider" />
        <AdminDashboard />
      </div>

      <ToastContainer position="top-right" />
    </>
  );
};

export default App;
