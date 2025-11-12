import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs[id];

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="text-center mt-10">
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>{blog.content}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white px-3 py-1 rounded mt-4"
      >
        Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;
