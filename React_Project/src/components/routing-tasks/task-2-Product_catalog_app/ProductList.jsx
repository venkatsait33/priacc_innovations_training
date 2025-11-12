import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Tablet", price: 30000 },
];
const ProductList = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h2>🛒 Products </h2>
      <ul className="mt-4">
        {products.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => navigate(`/products/${p.id}`)}
              className="text-blue-600 underline cursor-pointer"
            >
              {p.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-3 py-1 rounded mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default ProductList;
