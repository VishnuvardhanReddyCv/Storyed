import React from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import LoginPage from "../Components/Pages/LoginPage/LoginPage";
import EditorPage from "../Components/Pages/EditorPage/EditorPage";
import FeedPage from "../Components/Pages/FeedPage/FeedPage";


export default function RootRoutes() {
  return (
    <Router >
        <Route  path={"/login"} component={LoginPage} />
        {/* <Route path={"/profile"} component={ProfilePage} /> */}
        <Route exact path={"/feed"} component={FeedPage} />
        <Route path={"/new-story"} component={EditorPage} />
    </Router>
  );
}
