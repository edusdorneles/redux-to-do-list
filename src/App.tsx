import Routes from "routes/Routes";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "store/storeConfig";

// Styles
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "styles/Themes/Dark";
import { LightTheme } from "styles/Themes/Light";

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

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

export default App;
