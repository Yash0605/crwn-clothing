import React from "react";
import FormInput from "../form-Input/form-Input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit= async e => {
      e.preventDefault();
      const {displayName, email, password, confirmPassword} = this.state;

      if(!displayName || !email || !password || !confirmPassword) {
          alert("Please enter all the details");
      }

      if(password!==confirmPassword) {
          alert("Passwords don't match, please enter the correct password");
          return;
      }

      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        await createUserProfileDocument(user,{displayName})
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });          
      } catch (error) {
          console.error(error);
      }
  }

  handleChange = e => {
      const {name, value} = e.target

      this.setState({[name] : value});
  }

  render() {
      const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign Up with your email mand password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
            label='Display Name'
            required
          ></FormInput>
          <FormInput
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            label='Email'
            required
          ></FormInput>
          <FormInput
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            label='Password'
            required
          ></FormInput>
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
            label='Confirm Password'
            required
          ></FormInput>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
