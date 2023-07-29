import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Body from "../components/Body";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
