import React, { useEffect, useState } from "react";
import { deleteFeedbackApi, getFeedbackApi } from "../api/api";

const FeedbackDashboard = ({ newItemSignal }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sortBy, setSortBy] = useState("newest"); // newest, rating_desc, rating_asc
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await getFeedbackApi();
      setFeedbacks(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (newItemSignal) load();
    // eslint-disable-next-line
  }, [newItemSignal]);

  const onDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) {
      return;
    }
    try {
      await deleteFeedbackApi(id);
    } catch (error) {
      console.log(error);
    }
    load();
  };
  const sorted = (feedbacks || []).slice().sort((a, b) => {
    if (sortBy === "newest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "rating_desc") return b.rating - a.rating;
    if (sortBy === "rating_asc") return a.rating - b.rating;
    return 0;
  });
  return (
    <div className="p-4 border-3 rounded-xl">
      <h3 className="text-xl font-semibold">Feedback Dashboard</h3>
      <div className="flex justify-between m-3">
        <label>Sort:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="rating_desc">Rating: High → Low</option>
          <option value="rating_asc">Rating: Low → High</option>
        </select>
        <div style={{ marginLeft: "auto" }}>
          {loading ? "Loading..." : `${feedbacks.length} feedbacks`}
        </div>
      </div>

      <table
        className="table"
        width="100%"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Comment</th>
            <th>Rating</th>
            <th>When</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {sorted.map((f) => (
            <tr key={f.id}>
              <td>{f.name}</td>
              <td>{f.comment}</td>
              <td>
                <strong>{f.rating}</strong>
                {f.rating <= 2 && (
                  <span style={{ marginLeft: 8, color: "#c00" }}>Negative</span>
                )}
              </td>
              <td>{new Date(f.createdAt).toLocaleString()}</td>
              <td>
                <button
                  className=" btn btn-error"
                  onClick={() => onDelete(f.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {sorted.length === 0 && (
            <tr>
              <td colSpan="5" style={{ padding: 12 }}>
                No feedback yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackDashboard;
