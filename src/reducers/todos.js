const initialState = [
    {id: 1, name: 'login page', status: 'ToDo', type: 'task'}, 
    {id: 2, name: 'main page', status: 'ToDo', type: 'task'},
    {id: 3, name: 'js error', status: 'InProgress', type: 'bug'},
    {id: 4, name: 'install package', status: 'Done', type: 'task'},
];

const todos = (state = initialState, action) => {
    if(action.type === 'ADD_NEW_CARD') {
        return [
            ...state,
            {
                id: action.id,
                name: action.name,
                type: action.typeOfCard,
                status: action.status
            }
        ]
        
    } else if(action.type === 'EDIT_CARD') {
        console.log('EDIT_CARD');
        return state.map(todo =>
            (todo.id === action.id)
                ? { id: action.id, name: action.name, type: action.typeOfCard, status: action.status }
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

export default todos