import React, { useState } from "react";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">MyWebsite</h1>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <ul className={`md:flex gap-4 ${open ? "block" : "hidden"} md:block`}>
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavbar;
