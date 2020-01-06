import React from "react";
import {
  Container,
  Row,
  Form,
  ButtonGroup,
  Button,
  Col
} from "react-bootstrap";
import styled from "styled-components";
import Master from "../../Master/Master";
import update from "immutability-helper";
import {
  isValidEmail,
  isValidPassword,
  isValidName
} from "../../../Utils/CommonUtils";
import { userLogin } from "./LoginService";
import { connect } from "react-redux";
import { getLoginFailedAction, getUpdateUserAction, getLoginSuccessAction } from "./LoginPage.actions";
import { setToken } from "../../../Utils/TokenService";
import {getData} from '../../../api';

const FormWrapper = styled.div`
  background: #fff;
  border: 1px solid #e2e2e2;
  box-shadow: 0 0 5px #888;
  border-radius: 4px;
  padding-top: 25px;
  width: 650px;
  min-height : 350px;
  position: absolute;
  bottom: initial;
  left: 0;
  right: 0;
  margin: auto;
  overflow-y: hidden;
  top: 30%;
  padding: 10px;
`;

const WarningText = styled(Form.Text)`
  display: ${props => props.display};
`;

const HeadWrapper = styled.p`
  font-weight: bold;
  padding: 5px;
  color: grey;
`;

const VerticalLine = styled.div`
  content: "";
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #e6e6e6;
  left: 50%;
  margin: 5px;
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNeededSignUpForm: false,
      loginDetails: {
        email: "",
        password: ""
      },
      signUpDetails: {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        password: ""
      },
      showWarnings: false
    };
    this.renderLoginForm = this.renderLoginForm.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.signUpFormToggle = this.signUpFormToggle.bind(this);
    this.renderSignUpForm = this.renderSignUpForm.bind(this);
    this.renderGmailSignUp = this.renderGmailSignUp.bind(this);
    this.signUpOnchangeHandler = this.signUpOnchangeHandler.bind(this);
    this.loginOnchangeHandler = this.loginOnchangeHandler.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  signUpFormToggle() {
    const isNeededSignUpForm = !this.state.isNeededSignUpForm;
    this.setState({ isNeededSignUpForm: isNeededSignUpForm });
  }

  signUpOnchangeHandler(event) {
    debugger;
    const name = event.target.id;
    const value = event.target.value;
    let showWarnings = false;
    if (name === "email") {
      if (!isValidEmail(value)) {
        showWarnings = true;
      }
    } else if (name === "password") {
      if (!isValidPassword(value)) {
        showWarnings = true;
      }
    } else {
      if (!isValidName(value)) {
        showWarnings = true;
        return;
      }
    }
    const newState = update(this.state, {
      signUpDetails: { [name]: { $set: value } },
      showWarnings: { $set: showWarnings }
    });
    this.setState(newState);
  }

  loginOnchangeHandler(event) {
    const name = event.target.id;
    const value = event.target.value;
    let showWarnings = false;
    if (name === "email") {
      if (!isValidEmail(value)) {
        showWarnings = true;
      }
    } else if (name === "password") {
      if (!isValidPassword(value)) {
        showWarnings = true;
      }
    }
    const newState = update(this.state, {
      loginDetails: { [name]: { $set: value } },
      showWarnings: { $set: showWarnings }
    });
    this.setState(newState);
  }

  async onLogin(event) {
    debugger;
    event.preventDefault();
    let response = await userLogin(this.state.loginDetails)
      if(response.status === 403){
        this.props.onLoginFailed();
        alert('loginFailed');
      }else if(response.status === 200){
        let data = await response.json();
        setToken(data.token);
        let userResponse = await getData('/users/getCurrentUser');
        if(userResponse.ok){
          let user = await userResponse.json();
          this.props.updateCurrentUser(user);
          this.props.onLoginSuccess();
        }
        this.props.history.push('/feed');
      }
  }

  onSignup() {}

  renderSignUp() {
    return (
      <Container>
        <HeadWrapper>Sign Up</HeadWrapper>
        {this.state.isNeededSignUpForm
          ? this.renderSignUpForm()
          : this.renderGmailSignUp()}
      </Container>
    );
  }

  renderGmailSignUp() {
    return (
      <Container>
        <ButtonGroup vertical>
          <br />
          <Button>Continue with Google</Button>
          <br />
          <Button>Continue with Facebook</Button>
          <br />
          <Button>Continue with Twitter</Button>
        </ButtonGroup>
        <Button variant="link" onClick={this.signUpFormToggle}>
          Sign up with Email
        </Button>
      </Container>
    );
  }

  renderSignUpForm() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            id="first_name"
            onChange={this.signUpOnchangeHandler}
            value={this.state.signUpDetails.first_name}
          />
          <WarningText
            className="text-danger"
            display={this.state.showWarnings ? "block" : "none"}
          >
            Name format incorrect.
          </WarningText>
        </Form.Group>

        <Form.Group>
          <Form.Label>Middle name(Optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Middle name"
            id="middle_name"
            onChange={this.signUpOnchangeHandler}
            value={this.state.signUpDetails.middle_name}
          />
          <WarningText
            className="text-danger"
            display={this.state.showWarnings ? "block" : "none"}
          >
            Name format incorrect.
          </WarningText>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            id="last_name"
            onChange={this.signUpOnchangeHandler}
            value={this.state.signUpDetails.last_name}
          />
          <WarningText
            className="text-danger"
            display={this.state.showWarnings ? "block" : "none"}
          >
            Name format incorrect.
          </WarningText>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            id="email"
            onChange={this.signUpOnchangeHandler}
            value={this.state.signUpDetails.email}
          />
          <WarningText
            className="text-danger"
            display={this.state.showWarnings ? "block" : "none"}
          >
            Email format incorrect.
          </WarningText>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            id="password"
            onChange={this.signUpOnchangeHandler}
            value={this.state.signUpDetails.password}
          />
          <WarningText
            className="text-danger"
            display={this.state.showWarnings ? "block" : "none"}
          >
            Password must Contain atleast 8 characters(Max. 15 characters).
          </WarningText>
        </Form.Group>
        <Container>
          <Button variant="link" onClick={this.signUpFormToggle}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={this.onSignup}>
            Sign up
          </Button>
        </Container>
      </Form>
    );
  }

  renderLoginForm() {
    return (
      <Container>
        <HeadWrapper>Log in</HeadWrapper>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              id="email"
              onChange={this.loginOnchangeHandler}
              value={this.state.loginDetails.email}
            />
            <WarningText
              className="text-danger"
              display={this.state.showWarnings ? "block" : "none"}
            >
              Email format incorrect.
            </WarningText>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.loginOnchangeHandler}
              value={this.state.loginDetails.password}
            />
            <WarningText
              className="text-danger"
              display={this.state.showWarnings ? "block" : "none"}
            >
              Password must Contain atleast 8 characters(Max. 15 characters).
            </WarningText>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.onLogin}>
            Log in
          </Button>
        </Form>
      </Container>
    );
  }

  render() {
    return (
      <Master>
        <FormWrapper>
          <Container>
            <Row>
              <Col>{this.renderSignUp()}</Col>
              <VerticalLine />
              <Col>{this.renderLoginForm()}</Col>
            </Row>
          </Container>
        </FormWrapper>
      </Master>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser : state.app.currentUser,
    loginStatus : state.app.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginFailed : () => {dispatch(getLoginFailedAction())},
    onLoginSuccess : () => {dispatch(getLoginSuccessAction())},
    updateCurrentUser : (user) => {dispatch(getUpdateUserAction(user))}
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);