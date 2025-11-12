import { Link } from "react-router-dom";
const cities = ["hyderabad", "bangalore", "chennai"];
const CityDetails = () => {
  return (
    <div className="text-center mt-10">
      <h2>🏙 Cities</h2>
      <ul>
        {cities.map((c) => (
          <li key={c}>
            <Link to={`/travel/city/${c}`} className="text-blue-600 underline">
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityDetails;
