import {createStore , applyMiddleware} from 'redux'
import logger from 'redux-logger'
import combineReducers from '../reducers/rootReducer'

const middlwWares = [logger]

const store = createStore(combineReducers, applyMiddleware(...middlwWares))

export default store