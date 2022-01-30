import React from "react";
import Header from "./components/Header";
import CarPage from "./pages/Cars";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <Header />
      <CarPage />
    </div>
  );
};

export default App;
