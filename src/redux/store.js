import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

const middlewares = [thunk,logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor= persistStore(store);

export default {store,persistor};


