import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, sagaMiddleware];

export default createStore(
  reducer,
  initialState,
  withDevTools(applyMiddleware(...middleware))
);
