import React from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../Components/Pages/LoginPage/LoginPage";
import EditorPage from "../Components/Pages/EditorPage/EditorPage";

const RouteWrapper = styled.div`
  height: 100%;
`;

export default function RootRoutes() {
  return (
    <Router>
      <RouteWrapper>
        <Route path={"/login"} component={LoginPage} />
        {/* <Route path={"/profile"} component={ProfilePage} /> */}
        {/* <Route path={"/story/:storyId"} component={StoryPage} /> */}
        <Route path={"/new-story"} component={EditorPage} />
      </RouteWrapper>
    </Router>
  );
}
