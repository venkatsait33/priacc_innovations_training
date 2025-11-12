import { useParams, useNavigate } from "react-router-dom";

const products = {
  1: { name: "Laptop", price: 50000 },
  2: { name: "Phone", price: 25000 },
  3: { name: "Tablet", price: 30000 },
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[id];

  if (!product) return <p>Product not found!</p>;

  return (
    <div className="text-center mt-10">
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-3 py-1 rounded mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default ProductDetails;
