import React from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Sports } from "./pages/sports/Sports";
import { Entertainment } from "./pages/entertainment/Entertainment";
import { Science } from "./pages/science/Science";
import CountriesProvider from "./context/CountryContext";
import { Busquedas } from "./pages/busquedas/Busquedas";

function App() {
  return (
    <CountriesProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sports" component={Sports} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/science" component={Science} />
            <Route path="/busquedas" component={Busquedas} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </CountriesProvider>
  );
}

export default App;
