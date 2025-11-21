import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: "", // store base64 file
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, resume: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.experience === "" ||
      formData.resume === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", formData);
      alert("Form & Resume uploaded successfully!");
      navigate("/application");

      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        resume: null,
      });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center hero items-center mx-auto bg-base-200 h-screen ">
      <div className=" border-b border-b-amber-300 hover:border-amber-200 hover:border shadow-xl hover:shadow-2xl rounded-2xl card w-[50%] ">
        <div className=" ml-4 mt-4 w-full">
          <button
            onClick={() => navigate(-1)}
            className=" btn btn-accent text-black "
          >
            Back
          </button>
        </div>
        <form onSubmit={handleSubmit} className="card-body ">
          <h2 className=" text-center text-xl font-semibold m-2">
            Fill the details for Job
          </h2>

          <div className="flex flex-col gap-4 w-full ">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
              className="input input-xl w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="input input-xl w-full"
            />

            <input
              type="number"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleChange}
              className="input input-xl w-full"
            />

            <input
              type="number"
              name="experience"
              placeholder="Enter experience"
              value={formData.experience}
              className="input input-xl w-full"
              onChange={handleChange}
            />

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className=" file-input w-full"
            />
            {loading ? (
              <>
                <button className="btn btn-outline">
                  <span className="loading loading-spinner loading-xl"></span>
                </button>{" "}
              </>
            ) : (
              <>
                {" "}
                <button type="submit" className="btn btn-outline">
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
