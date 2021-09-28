import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HatsPage = props => (
  <div>
    <h1>This is Hats Page</h1>
  </div>
)

const HomePage = (props) => (
  <div className="homepage">
    <Router>
      <Switch>
        <Route exact path="/">
          <Directory></Directory>
        </Route>
        <Route path="/shop/hats">
          <HatsPage></HatsPage>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default HomePage;
