import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/slice/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUser(""));
  };
  return (
    <div className="navbar flex justify-between items-center py-4 px-6 ">
      <div className="flex">
        <Link to="/" className="text-xl font-semibold">
          Ticketing
        </Link>
      </div>
      <div
        className="flex justify-between items-center
      gap-4"
      >
        {
          user && user.role === "user" && (
            <button
              className="btn btn-primary"
              onClick={() => navigate("/user/dashboard")}
            >
              Dashboard
            </button>
          ) // if user is logged in, show dashboard button
        }
        {
          !user && (
            <button
              className=" btn btn-outline"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) // if user is not logged in, show login button
        }
        {
          user && (
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          ) // if user is logged in, show logout button
        }
      </div>
    </div>
  );
};
export default Navbar;
