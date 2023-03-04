import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import JoinRandom from "../Pages/JoinRandom";

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<JoinRandom />} />
      <Route path="/home/:id" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
