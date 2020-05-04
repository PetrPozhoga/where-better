import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunk from 'redux-thunk'

import combinedReducer from './reducers'

const middleware = [ thunk ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger({
    collapsed: true
  }));
}

export const initializeStore = (preloadedState) => createStore(combinedReducer, preloadedState, applyMiddleware(...middleware))
