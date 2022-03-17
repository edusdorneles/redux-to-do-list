import ReactSwitch from "react-switch";

// Redux
import { connect } from "react-redux";
import { switchTheme } from "store/actions/themeAction";

// Styles
import { HeaderStyle } from "./styles";
import { Container } from "styles/GlobalStyle";

// Icons
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { Dispatch } from "redux";

// Interfaces
interface IProps {
  theme: boolean;
  switchTheme: IThemeActionCreator;
}

const Header: React.FC<IProps> = ({ theme, switchTheme }) => {
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
              switchTheme(theme);
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

// Mapeando os estados para as props do componente.
const mapStateToProps = (state: ITheme) => {
  return {
    theme: state.theme
  };
};

// Mapeando os dispatchs para as props do componente.
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    switchTheme(theme: Theme) {
      const action = switchTheme(theme);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
