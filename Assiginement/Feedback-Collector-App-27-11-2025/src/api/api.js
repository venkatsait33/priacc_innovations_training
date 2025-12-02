import axios from "axios";

const BASE_URL = "http://localhost:3000";
const USE_API = true;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const postFeedbackApi = async (feedback) => {
  if (!USE_API) throw new Error("API is not available");
  const response = await api.post("/feedbacks", feedback);
  return response.data;
};

export const getFeedbackApi = async () => {
  if (!USE_API) throw new Error("API is not available");
  const response = await api.get("/feedbacks");
  return response.data;
};

export const deleteFeedbackApi = async (id) => {
  console.log("Deleting:", `${BASE_URL}/feedbacks/${Number(id)}`);
  return api.delete(`/feedbacks/${Number(id)}`); // ensure numeric id
};
