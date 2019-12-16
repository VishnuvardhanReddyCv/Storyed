import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ReactQuillWrapper = styled(ReactQuill)`
  display: block;
  height: inherit;
`;

const EditorWrapper = styled(Container)`
  height: 90%;
`;

const SubmitWrapper = styled(Container)`
  height: 10%;
`;

export default function Editor(props) {
  return (
    <Wrapper>
      <EditorWrapper>
        <ReactQuillWrapper
          id="html-editor"
          value={props.value}
          onChange={props.onEditorContentChange}
          placeholder = {props.placeholder}
        />
      </EditorWrapper>
      <SubmitWrapper>
        <br />
        <Button onClick={props.onSubmit}>{props.submitText}</Button>
      </SubmitWrapper>
    </Wrapper>
  );
}
