import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

const StyledNotificationWrapper = styled.div`
    display : ${props => (props.hidden ? "none" : "block")}
    width : 500px;
    height : 80px;
    position : absolute;
    bottom : 1%;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled.div`

`;

export default function Notification(props) {
  function renderSuccessIcon() {
    return <FontAwesomeIcon icon={faCheckCircle} color = "green" />;
  }

  function renderFailureIcon() {
    return <FontAwesomeIcon icon={faTimesCircle} color = "red" />;
  }

  return (
    <StyledNotificationWrapper hidden = {props.hidden}>
      <Wrapper>
        <Card>
          <Card.Body>
            <InnerWrapper>
              <span>
                {props.success ? renderSuccessIcon() : renderFailureIcon()}
              </span>
              <p>{props.message}</p>
            </InnerWrapper>
          </Card.Body>
        </Card>
      </Wrapper>
    </StyledNotificationWrapper>
  );
}
