import { createStore, combineReducers, applyMiddleware } from 'redux';
import { appLogin } from '../Components/Pages/LoginPage/Login.reducer';
import { storyEditor } from '../Components/Pages/EditorPage/Editor.reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Global/RootSagas';
import { FeedReducer } from '../Components/Pages/FeedPage/FeedPage.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagas = createSagaMiddleware();
const rootReducer = combineReducers({app : appLogin,editor: storyEditor, feed : FeedReducer});

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger,sagas)
  ));
sagas.run(rootSaga);


