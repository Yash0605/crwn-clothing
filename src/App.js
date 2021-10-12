import React from "react";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route, Redirect } from "react-router";
import ShopPage from "./pages/shoppage/shopPage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp.component.jsx";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action.js";

import "./App.css";

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

        // console.log(this.state)
      } else{
        setCurrentUser(userAuth);
      }      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
          <Route exact path="/signIn" render = {() => this.props.currentUser ? <Redirect to = '/'></Redirect> : <SignInAndSignUp></SignInAndSignUp>}>
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
