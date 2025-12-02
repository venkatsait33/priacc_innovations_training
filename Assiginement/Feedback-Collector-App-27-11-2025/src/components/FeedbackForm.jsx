import React, { useState } from "react";
import { postFeedbackApi } from "../api/api";

const FeedbackForm = ({ onAdd }) => {
  const [data, setData] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!data.name || !data.comment) {
      return "Please fill all the fields";
    }
    if (!data.rating || data.rating < 1 || data.rating > 5) {
      return "Rating should be between 1 and 5";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    const payload = {
      id: Date.now(),
      name: data.name.trim(),
      comment: data.comment.trim(),
      rating: Number(data.rating),
      createdAt: new Date().toISOString(),
    };
    setLoading(true);
    try {
      const response = await postFeedbackApi(payload);
      onAdd(response);
      console.log(response);
      setData({
        name: "",
        comment: "",
        rating: 5,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // await postFeedbackApi(data);
  };
  return (
    <div className=" border-2 rounded-xl p-4 card">
      <h1 className="text-xl font-semibold">Please Provide Your Feedback</h1>
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col gap-3  w-fit card-body"
      >
        <div>
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="input input-xl"
          />
        </div>

        <div>
          <label className="label">Comment</label>
          <textarea
            value={data.comment}
            onChange={handleChange}
            name="comment"
            className="textarea"
          />
        </div>

        <label className="label">
          Rating
          <select
            className="select"
            value={data.rating}
            name="rating"
            onChange={handleChange}
          >
            <option value={5}>5</option>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
            <option value={1}>1</option>
          </select>
        </label>

        <div>
          <button
            className=" btn btn-lg btn-primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Submit Feedback"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
