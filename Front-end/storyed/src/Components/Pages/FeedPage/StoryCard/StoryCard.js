import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";

const CardWrapper = styled.div`
    margin-top : 1rem;
    margin-bottom : 1rem;
`;

function StoryCard(props) { 
  return (
    <CardWrapper>
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body dangerouslySetInnerHTML = {{__html : props.content}}></Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    </CardWrapper>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryCard);
