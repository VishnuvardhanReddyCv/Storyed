import React from "react";
import styled from "styled-components";
import { NavDropdown, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { getImage } from "../../Utils/CommonUtils";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const HeaderWrapper = styled.div`
  .navbar {
    margin-bottom: 0;
  }
  display: flex;
  postion: fixed;
  padding-left: 20%;
`;

const RightFloatWrapper = styled.div`
  margin-left: 200px;
`;

const Logout = styled(NavDropdown.Item)`
  color: red;
`;

const Login = styled(Nav.Link)`
  border: 2px;
  background-color: #0080ff;
  border-radius: 5px;
  color: White;
  font-weight: bold;
`;
const NavItemWrapper = styled(Nav.Link)`
  ${props => props.styles}
  font-weight : bold;
  margin-right: 20px;
`;

const NavItemButtonWrapper = styled(NavItemWrapper)`
  background-color: #6cd4e4;
  border-radius: 5px;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 8rem;
  height: 6rem;
`;

const NavbarWrapper = styled(Navbar)`
  height: 40px;
`;

const NotificationBadge = styled.span`
  margin: auto;
  margin-left: 3px;
  background-color: #0080ff;
  color: white;
`;

const Search = styled(FormControl)`
  width: 100rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.renderUserInfo = this.renderUserInfo.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    alert("Logout Successful");
  }

  renderUserInfo() {
    if (this.props.isLoggedIn) {
      return (
        <NavDropdown
          title={this.props.user.firstName}
          className="float-right"
          id="Profile"
        >
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <Logout onClick={this.onLogout} href="/login">Log out</Logout>
        </NavDropdown>
      );
    }
    return <Login href="/login">Log In</Login>;
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <NavbarWrapper collapseOnSelect>
            <LinkContainer to="/">
              <Navbar.Brand>
                <Logo src={getImage("storyed_logo.png")}></Logo>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/Feed">
                  <NavItemWrapper>Feed</NavItemWrapper>
                </LinkContainer>
                <LinkContainer to="/notifications">
                  <NavItemWrapper styles="display : flex;">
                    Notifications{" "}
                    <NotificationBadge className="badge badge-pill badge-light">
                      {" "}
                      4
                    </NotificationBadge>
                  </NavItemWrapper>
                </LinkContainer>
                <LinkContainer to="/new-story">
                  <NavItemButtonWrapper>Add Story</NavItemButtonWrapper>
                </LinkContainer>
                <Form inline>
                  <Search
                    type="text"
                    placeholder="Search for Stories"
                    className="mr-sm-2"
                  />
                </Form>
              </Nav>
              <RightFloatWrapper>{this.renderUserInfo()}</RightFloatWrapper>
            </Navbar.Collapse>
          </NavbarWrapper>
        </HeaderWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.app.isLoggedIn,
    user: state.app.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
