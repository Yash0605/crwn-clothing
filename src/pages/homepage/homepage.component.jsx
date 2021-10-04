import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import ShopPage from "../shoppage/shopPage.component";

import "./homepage.styles.scss";

const HomePage = (props) => (
  <div className="homepage">
    <Directory></Directory>
    
  </div>
);

export default HomePage;
