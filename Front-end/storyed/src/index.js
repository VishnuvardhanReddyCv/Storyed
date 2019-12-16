import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import Header from "./Components/Header/Header";
import LoginPage from "./Components/Pages/LoginPage/LoginPage";
import EditorPage from "./Components/Pages/EditorPage/EditorPage";
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {storyEditor} from './Components/Pages/EditorPage/Editor.reducer';
import RootRoutes from "./Global/RootRoutes";


ReactDOM.render(
  <Provider store ={createStore(storyEditor)}>
    <RootRoutes />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
