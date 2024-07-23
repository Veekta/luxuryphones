import React from "react";
import Footer from "./components/Footer";
// import Form from "./components/Form";
import Navs from "./components/Navs";
import MainPage from "./page/MainPage";

const App = () => {
  return (
    <div>
      <Navs />
      <MainPage />
      <Footer />
      {/* <Form />  */}
    </div>
  );
};

export default App;
