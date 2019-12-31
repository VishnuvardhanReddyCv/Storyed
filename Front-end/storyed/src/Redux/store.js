import { createStore, combineReducers, applyMiddleware } from 'redux';
import { appLogin } from '../Components/Pages/LoginPage/Login.reducer';
import { storyEditor } from '../Components/Pages/EditorPage/Editor.reducer';
import logger from 'redux-logger';


let rootReducer = combineReducers({app : appLogin,editor: storyEditor});


export const store = createStore(rootReducer,applyMiddleware(logger));