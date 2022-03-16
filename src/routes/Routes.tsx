import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Layout from "components/Layout";

// Pages
import Home from "pages/Home/Home";

// Styles
import { GlobalStyle } from "styles/GlobalStyle";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Layout>
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
