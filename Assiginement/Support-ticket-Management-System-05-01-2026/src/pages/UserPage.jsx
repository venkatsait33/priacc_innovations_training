import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTicket } from "../redux/slice/userTicketSlice.js";
import { Link, useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
    issuePriority: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (user.role === "admin") {
    navigate("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first");
      return;
    }
    dispatch(addTicket({ ticketData: data, userId: user.id }));
    navigate("/user/dashboard");
    setData({
      name: "",
      email: "",
      issueType: "",
      description: "",
      issuePriority: "",
    });
  };
  return (
    <div className="p-10 w-fit mx-auto flex flex-col gap-5">
      <div>
        <Link className="btn  btn-outline" to="/user/dashboard">
          Back
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col gap-3 ">
        <h1 className="text-3xl font-semibold mb-4">Request Form For User</h1>
        <div className="border border-accent p-4 rounded-xl shadow-md">
          <h1 className="text-xl font-semibold">
            Fill the Form With Valid Query for Rise A Ticket
          </h1>
          <form onSubmit={handleSubmit} className=" max-w-4xl w-full ">
            <div className="card shadow-xl max-w-4xl ">
              <div className="card-body">
                <fieldset className="fieldset ">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input w-full"
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input w-full"
                    onChange={handleChange}
                  />
                  <select
                    defaultValue="issue type"
                    name="issueType"
                    onChange={handleChange}
                    className="select w-full"
                  >
                    <option disabled={true}>Issue Type</option>
                    <option>Bug</option>
                    <option>Payment</option>
                    <option>Login</option>
                    <option>Feature</option>
                  </select>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    className="textarea w-full"
                    onChange={handleChange}
                    name="description"
                  />
                  <select
                    defaultValue="priority"
                    name="issuePriority"
                    onChange={handleChange}
                    className="select w-full"
                  >
                    <option disabled={true}>Issue Priority</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
