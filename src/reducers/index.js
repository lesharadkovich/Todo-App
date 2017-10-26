const initialState = require('../initialData');

const todos = (state = initialState, action) => {
    if(action.type === 'ADD_NEW_CARD') {
        return [
            ...state,
            {
                id: action.id,
                name: action.name,
                type: action.typeOfCard,
                status: action.status,
                description: action.description
            }
        ]
        
    } else if(action.type === 'EDIT_CARD') {
        return state.map(todo =>
            (todo.id === action.id)
                ? { id: +action.id, name: action.name, type: action.typeOfCard, status: action.status, description: action.description }
                : todo
        )
    } else if(action.type === 'DELETE_CARD') {
        return state.filter(todo => {
            if(todo.id !== action.id)
                return todo;
        })
    }

    return state;
}

const todoAppReducer = todos;
export default todoAppReducer