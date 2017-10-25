let index = 5;

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
                id: index++,
                name: action.name,
                type: action.typeOfCard,
                status: action.status
            }
        ]
    }

    return state;
}

export default todos