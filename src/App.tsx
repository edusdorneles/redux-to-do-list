import Routes from "routes/Routes";

// Styles
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "styles/Themes/Dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
