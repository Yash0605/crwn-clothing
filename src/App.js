import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route } from "react-router";
import ShopPage from "./pages/shoppage/shopPage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component.jsx";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils.js";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

        console.log(this.state)
      } else{
        this.setState({ currentUser: userAuth });
      }      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/shop">
            <ShopPage></ShopPage>
          </Route>
          <Route exact path="/signIn">
            <SignInAndSignUp></SignInAndSignUp>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
