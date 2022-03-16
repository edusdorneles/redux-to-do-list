import React, { useState } from "react";
import ReactSwitch from "react-switch";

// Styles
import { HeaderStyle } from "./styles";
import { Container } from "styles/GlobalStyle";

// Icons
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Header: React.FC = () => {
  const [theme, setTheme] = useState(true);

  return (
    <HeaderStyle>
      <Container className="header__container">
        <div className="header__container__title">
          <h1>Redux - To do List</h1>
        </div>

        <div className="header__container__switch">
          <ReactSwitch
            checked={theme}
            onChange={() => {
              setTheme(!theme);
            }}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 6px rgba(0, 0, 0, 0.2)"
            height={18}
            width={40}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            checkedIcon={false}
            uncheckedIcon={false}
            checkedHandleIcon={
              <div className="header__container__switch--icon">
                <FiMoon />
              </div>
            }
            uncheckedHandleIcon={
              <div className="header__container__switch--icon">
                <FiSun />
              </div>
            }
          />
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
