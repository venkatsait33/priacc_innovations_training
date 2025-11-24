import { useState } from "react";
import { toast } from "react-toastify";
import api from "../axios/axiosConfig";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issueType: "",
    message: "",
    resolved: false,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    await api.post("/contacts", form);
    toast.success("Message submitted!");
    setForm({
      name: "",
      email: "",
      issueType: "",
      message: "",
      resolved: false,
    });
  };

  return (
    <div className="mx-auto w-fit mt-4 flex shadow-xl  border rounded-xl p-3">
      <form onSubmit={submitForm} className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Contact Support</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input-xl input"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="input input-xl"
        />

        <select
          name="issueType"
          className="select"
          value={form.issueType}
          onChange={handleChange}
        >
          <option value="">Select Issue Type</option>
          <option>Login Problem</option>
          <option>Payment Issue</option>
          <option>Bug Report</option>
          <option>Other</option>
        </select>

        <textarea
          name="message"
          placeholder="Explain your issue…"
          value={form.message}
          onChange={handleChange}
          required
          className="textarea"
        />
        <button type="submit" className="btn btn-primary btn-lg ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
