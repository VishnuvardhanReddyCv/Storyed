import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import HiddenComponets from "../HiddenComponents/HiddenComponents";

const Wrapper = styled.div`
  height: 100%;
`;

const HeaderWrapper = styled.div`
  height: 10%;
  border-bottom: solid 1px #dadada;
`;

const ChildrenWrapper = styled.div`
  background-color: #fafafa;
  padding : 10px;
  height: 90%;
`;

export default class Master extends React.Component {
  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ChildrenWrapper>{this.props.children}</ChildrenWrapper>
        <HiddenComponets />
      </Wrapper>
    );
  }
}
