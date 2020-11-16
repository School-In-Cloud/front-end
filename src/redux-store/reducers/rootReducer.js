import {combineReducers} from 'redux'
import {userTypeReducer} from './userTypeReducer'
import {taskReducer} from './taskReducer'
export default combineReducers({
    userType: userTypeReducer,
    todos: taskReducer
})