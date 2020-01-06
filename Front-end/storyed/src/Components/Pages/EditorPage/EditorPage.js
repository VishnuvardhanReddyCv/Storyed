import React from "react";
import Master from "../../Master/Master";
import { Container, Form, Row } from "react-bootstrap";
import Editor from "./Editor";
import {
  getContentChangeAction,
  getTitleChangeAction
} from "../EditorPage/EditorActions";
import { postStory } from "./Editor.service";
import { connect } from "react-redux";
import styled from "styled-components";

const EditorPageWrapper = styled.div`
    height : 100%;
`;

const EditorWrapper = styled(Row)`
  height: 80%;
`;

const TitleWrapper = styled(Row)`
height: 10%;
`;

class EditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.saveStory = this.saveStory.bind(this);
  }

  saveStory() {
    let story = {
      author : this.props.currentUser,...this.props.story
    }
    debugger;
    postStory(story);
  }

  onTitleChange = (event) => {
    const title = event.target.value;
    this.props.onStoryTitleChange(title);
  }

  render() {
    return (
        <Master>
          <EditorPageWrapper>
            <TitleWrapper>
              <Container>
                <Form.Group>
    <Form.Label><strong>Title</strong></Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add appropriate title for your story..."
                    value = {this.props.story.title}
                    onChange = {this.onTitleChange}
                  />
                </Form.Group>
              </Container>
            </TitleWrapper>

            <br />
            <EditorWrapper>
                <Editor
                  onSubmit={this.saveStory}
                  onEditorContentChange={this.props.onEditorContentChange}
                  placeholder = "Write your story here..."
                  submitText = "Save"
                  content = {this.props.story.content}
                ></Editor>
            </EditorWrapper>
          </EditorPageWrapper>
        </Master>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditorContentChange: content => dispatch(getContentChangeAction(content)),
    onStoryTitleChange: title => dispatch(getTitleChangeAction(title))
  };
};

const mapStateToProps = (state) => {return({ currentUser : state.app.currentUser,story : state.editor})};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
