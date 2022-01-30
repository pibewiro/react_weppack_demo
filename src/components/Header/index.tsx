import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header__title">Cars Site</h1>
      </div>
      <div className="header__image">
        <img src={require("../../../public/assets/homeimage.jpeg").default} />
      </div>
    </>
  );
};

export default Header;
