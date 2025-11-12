import { useNavigate, useParams } from "react-router-dom";

const cityData = {
  hyderabad: "Famous for Charminar and Biryani.",
  bangalore: "Known as Silicon Valley of India.",
  chennai: "Famous for Marina Beach and culture.",
};

const cityNames = Object.keys(cityData);
const TravelCites = () => {
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();
  const index = cityNames.indexOf(name);

  if (index === -1) return <p>City not found!</p>;

  const nextCity = cityNames[index + 1];
  const prevCity = cityNames[index - 1];

  return (
    <div className="text-center mt-10">
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>{cityData[name]}</p>

      <div className="mt-4 space-x-3">
        {prevCity && (
          <button
            onClick={() => navigate(`/travel/city/${prevCity}`)}
            className="bg-gray-400 px-3 py-1 rounded text-white"
          >
            Previous
          </button>
        )}
        {nextCity && (
          <button
            onClick={() => navigate(`/travel/city/${nextCity}`)}
            className="bg-gray-600 px-3 py-1 rounded text-white"
          >
            Next
          </button>
        )}
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 px-3 py-1 rounded text-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TravelCites;
