import {combineReducers} from 'redux'
import {userTypeReducer} from './userTypeReducer'

export default combineReducers({
    userType: userTypeReducer
})