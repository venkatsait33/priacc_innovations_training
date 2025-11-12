import { Link, useNavigate } from "react-router-dom";
import { blogs } from "./blogData";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-10">
      <h1>📝 Blog Reader</h1>
      {blogs.map((b) => (
        <p key={b.id}>
          <Link to={`/blog/${b.id}`} className="text-blue-600 underline">
            {b.title}
          </Link>
        </p>
      ))}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-3 py-1 rounded mt-4"
      >
        Back
      </button>
    </div>
  );
};

export default Blog;
