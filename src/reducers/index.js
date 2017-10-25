import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// const todoAppReducer = combineReducers({
//     todos,
//     visibilityFilter
// })

const todoAppReducer = todos;

export default todoAppReducer