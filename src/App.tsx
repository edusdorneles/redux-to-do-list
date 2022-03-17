import Routes from "routes/Routes";

// Redux
import { connect } from "react-redux";

// Styles
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "styles/Themes/Dark";
import { LightTheme } from "styles/Themes/Light";

// Interfaces
interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = ({ theme }) => {
  return (
    <ThemeProvider theme={theme ? DarkTheme : LightTheme}>
      <Routes />
    </ThemeProvider>
  );
};

const mapStateToProps = (state: ITheme) => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(App);
