import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import From from "./components/From";
import ListOfApplicants from "./components/ListOfApplicants";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/apply" element={<From />} />
        <Route path="/application" element={<ListOfApplicants />} />
      </Routes>
    </>
  );
};

export default App;
