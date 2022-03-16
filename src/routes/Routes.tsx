import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home/Home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
