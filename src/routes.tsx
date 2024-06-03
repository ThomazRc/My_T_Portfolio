import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ErrorPage } from "./pages/Error";

export const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
