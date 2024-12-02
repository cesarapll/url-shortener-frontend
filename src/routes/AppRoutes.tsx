import { Route, Routes } from "react-router-dom";
import HomePage from "../url-shortening/pages/HomePage";
import CreationPage from "../url-shortening/pages/CreationPage";
import RedirectionPage from "@/url-shortening/pages/RedirectionPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreationPage />} />
      <Route path='/:code' element={<RedirectionPage />} />
    </Routes>
  );
};

export default AppRoutes;
