import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home } from "./pages/home/Home";
import { Sports } from "./pages/sports/Sports";
import { Entertainment } from "./pages/entertainment/Entertainment";
import { Science } from "./pages/science/Science";
import CountriesProvider from "./context/CountryContext";
import { Search } from "./pages/search/Search";

function App() {
  return (
    <CountriesProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.SPORTS} component={Sports} />
            <Route path={ROUTES.ENTERTAINMENT} component={Entertainment} />
            <Route path={ROUTES.SCIENCE} component={Science} />
            <Route path={ROUTES.SEARCH} component={Search} />
          </Switch>
        </div>
      </Router>
    </CountriesProvider>
  );
}

export default App;
