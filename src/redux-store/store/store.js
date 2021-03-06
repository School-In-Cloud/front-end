import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import combineReducers from '../reducers/rootReducer'
import thunk from 'redux-thunk'
const middlwWares = [logger, thunk]

const store = createStore(combineReducers, applyMiddleware(...middlwWares))

export default store