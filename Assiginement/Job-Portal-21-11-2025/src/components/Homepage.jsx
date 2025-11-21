import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center hero items-center mx-auto bg-base-200 h-screen gap-3">
      <h1 className="text-3xl font-semibold">Welcome to the job-portal</h1>
      <Link to="/apply" className=" btn btn-outline btn-primary">
        Apply for job.
      </Link>
      <Link to="/application" className=" btn btn-outline btn-secondary">
        View Applications
      </Link>
    </div>
  );
};

export default Homepage;
