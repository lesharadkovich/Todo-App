import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

const initialState = [
    {id: 1, name: 'login page', status: 'ToDo', type: 'task'}, 
    {id: 4, name: 'main page', status: 'ToDo', type: 'task'},
    {id: 8, name: 'js error', status: 'InProgress', type: 'bug'},
    {id: 9, name: 'install package', status: 'Done', type: 'task'},
]

const todos = (state = initialState, action) => {
    return {
        todos: state
    }
}

export default todos


// const todoAppReducer = combineReducers({
//     todos,
//     visibilityFilter
// })

// export default todoAppReducer