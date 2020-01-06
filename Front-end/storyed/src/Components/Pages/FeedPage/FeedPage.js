import React from "react";
import Master from "../../Master/Master";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import StoryCard from "./StoryCard/StoryCard";
import { getGetFeedAction } from "./FeedPage.actions";

const FeedPageWrapper = styled.div`
height : 100%;
`;

const RowWrapper = styled(Row)`
height : 100%;
`; 

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderStoryCards = this.renderStoryCards.bind(this);
  }

  componentDidMount(){
      this.props.getFeed();
  }

  renderStoryCards() {
    let cards =
      this.props.stories &&
      this.props.stories.map(story => <StoryCard {...story} />) || [];

    return cards.length > 0? cards: <NoStoriesCard />
  }

  render() {
    return (
      <Master>
        <FeedPageWrapper>
          <RowWrapper>
            <Col></Col>
            <Col>{this.renderStoryCards()}</Col>
            <Col></Col>
          </RowWrapper>
        </FeedPageWrapper>
      </Master>
    );
  }
}

const mapStateToProps = state => {
  return {
      stories : state.feed
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getFeed : () => dispatch(getGetFeedAction())
  };
};


function NoStoriesCard(props) {
    return(<Card>
        No Stories Found.
    </Card>);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
