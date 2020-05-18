import React, { Component } from "react";
import { Input, Forms, Error, Text, Toggle } from "./SignUpStyle";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ImageWrapper,
  SignUpButton,
  LoginButton,
} from "./UserFormsStyle";
import Login from "./Login";
import { withRouter } from "react-router-dom";
import formpage from "../../assests/images/formpage.jpeg";

class SignUp extends Component {
  state = {
    signUp: true,
    login: false,
    // users: {
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
    //   },
    type: 'password',
    typeConfirm: 'password',
    emailError: "",
    nameError: "",
    userNameError: "",
    passwordError: "",
    confirmPasswordError: "",
  };

  validate = () => {
    let nameError = "";
    if (this.state.name.length < 5) {
      nameError = "should have minimum 5 characters";

      if (nameError) {
        this.setState({
          nameError,
        });
        console.log("error :", this.state.nameError);
        return false;
      }
    }
    this.setState({
      nameError,
    });

    let userNameError = "";
    if (this.state.userName.length < 5) {
      userNameError = "should have minimum 5 characters";

      if (userNameError) {
        this.setState({
          userNameError,
        });
        console.log("error :", this.state.userNameError);
        return false;
      }
    }
    this.setState({
      userNameError,
    });

    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "email is not valid";

      if (emailError) {
        this.setState({
          emailError,
        });
        console.log("error :", this.state.emailError);
        return false;
      }
    }
    this.setState({
      emailError,
    });

    let passwordError = "";
    if (this.state.password.length < 5) {
      passwordError = "password is not strong";

      if (passwordError) {
        this.setState({
          passwordError,
        });
        console.log("error :", this.state.passwordError);
        return false;
      }
    }

    this.setState({
      passwordError,
    });

    let confirmPasswordError = "";
    if (!(this.state.password === this.state.confirmPassword)) {
      confirmPasswordError = "password doesn't match";

      if (confirmPasswordError) {
        this.setState({
          confirmPasswordError,
        });
        console.log("error :", this.state.confirmPasswordError);
        return false;
      }
    }
    this.setState({
      confirmPasswordError,
    });

    return true;
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log("validate :", isValid);
    if (isValid) {
      console.log("newusers :", this.state.name);
      sessionStorage.setItem("email", this.state.email);
      sessionStorage.setItem("password", this.state.password);
      this.props.history.push("/login");
    } else {
      console.log("validate is false :");
    }
  };

  loginHandler = () => {
    this.setState({
      login: true,
      signUp: false,
    });
    this.props.history.push("/login");
  };

  signUpHandler = () => {
    this.setState({
      signUp: true,
      login: false,
    });
    this.props.history.push("/");
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

showHide= ()=> {
    
    this.setState(({type}) => ({
        type: this.state.type === 'password' ? 'text' : 'password'
    }))
}

showHideConfirmPassword= ()=> {
    
    this.setState(({typeConfirm}) => ({
        typeConfirm: this.state.typeConfirm === 'password' ? 'text' : 'password'
    }))

}

  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <ImageWrapper>
            <img src={formpage} alt="image" />
          </ImageWrapper>
        </LeftWrapper>
        <RightWrapper>
          <Forms onSubmit={this.onSubmitHandler}>
            <div style={{ textAlign: "left" }}>
              <Text>Name:</Text>
              <Input
                type="text"
                name="name"
                placeholder="enter your full name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              {this.state.nameError ? (
                <Error>{this.state.nameError}</Error>
              ) : null}
            </div>
            <div>
              <Text>Email:</Text>{" "}
              <Input
                type="email"
                name="email"
                placeholder="enter your mail id"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              {this.state.emailError ? (
                <Error>{this.state.emailError}</Error>
              ) : null}
            </div>
            <div>
              <Text>UserName:</Text>
              <Input
                type="text"
                name="userName"
                placeholder="enter your user name "
                value={this.state.userName}
                onChange={this.handleChange}
                required
              />
              {this.state.userNameError ? (
                <Error>{this.state.userNameError}</Error>
              ) : null}
            </div>
            <div>
              <Text>Password:</Text>
              <div style={{position: "relative"}}><Input
                type={this.state.type}
                name="password"
                placeholder="enter your password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
             <Toggle onClick={this.showHide}>{this.state.type === 'password' ? 'show' : 'hide'}</Toggle>
              </div>
              {this.state.passwordError ? (
                <Error>{this.state.passwordError}</Error>
              ) : null}
            </div>
            <div>
              <Text>Confirm-Password:</Text>
              <div style= {{position: "relative"}}><Input
                type= {this.state.typeConfirm}
                name="confirmPassword"
                placeholder="confirm your password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                required
              />
              <Toggle onClick={this.showHideConfirmPassword}>{this.state.typeConfirm === 'password' ? 'show' : 'hide'}</Toggle>
              </div>
              {this.state.confirmPasswordError ? (
                <Error>{this.state.confirmPasswordError}</Error>
              ) : null}
            </div>
            <div>
              <SignUpButton type= "submit"
                // onClick={this.signUpHandler}
                clicked={this.state.signUp}
              >
                Sign Up
              </SignUpButton>
              <LoginButton
                onClick={this.loginHandler}
                clicked={this.state.login}
              >
                Login
              </LoginButton>
            </div>
          </Forms>
        </RightWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(SignUp);
