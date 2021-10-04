import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route } from "react-router";
import ShopPage from "./pages/shoppage/shopPage.component.jsx";
import Header from "./components/header/header.component.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/shop">
          <ShopPage></ShopPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
