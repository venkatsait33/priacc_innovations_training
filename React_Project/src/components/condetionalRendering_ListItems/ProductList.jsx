import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 70000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-3">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border-b py-2">
            {product.name} — ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
