import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import HiddenComponets from "../HiddenComponents/HiddenComponents";


const HeaderWrapper = styled.div`
  height: 5rem;
  border-bottom: solid 1px #dadada;
`;

const ChildrenWrapper = styled.div`
  background-color: #fafafa;
  padding : 10px;
  flex: 1 1 auto;
`;

const Wrapper = styled.div`
  min-height : inherit;
  display : flex;
  flex-direction : column;
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
