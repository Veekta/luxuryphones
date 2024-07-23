import React from "react";
import HeaderPage from "../components/HeaderPage";
import SalesPage from "../components/SalesPage";
import Testimonies from "../components/Testimonies";
import Visuals from "../components/Visuals";
import "./MainPage.css";
const MainPage = () => {
  return (
    <div>
      <HeaderPage />
      <Visuals />
      <SalesPage />
      <Testimonies />
      <p className="chat__text">chat with us</p>
    </div>
  );
};

export default MainPage;
