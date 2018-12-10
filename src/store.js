import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootreducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];
const enhanser = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(rootreducer, enhanser);

export default store;
