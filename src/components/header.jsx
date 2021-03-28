import { isMobile } from "react-device-detect";

const Header = ({ showForm, showHome }) => {
  return (
    <div className="home-header">
      <span id="title">
        <h1 id={!isMobile ? "h1-title" : "h1-title-mobile"} onClick={showHome}>
          YourShop
        </h1>
      </span>
      <span id="open-form">
        <button id="contact-button" onClick={showForm}>
          Contattaci
        </button>
      </span>
    </div>
  );
};

export default Header;
