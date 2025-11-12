import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-10 flex flex-col justify-between items-center mx-auto">
      <h1>🛍 Product Catalog</h1>
      <button
        onClick={() => navigate("/product/list")}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Go to Products
      </button>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-3 py-1 rounded mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default Product;
