import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home/Home";

// Styles
import { GlobalStyle } from "styles/GlobalStyle";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
