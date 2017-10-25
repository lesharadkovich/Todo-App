const visibilityFilter = (state = 'Table', action) => {
    if(action.type === 'OPEN_DETAILS') {
        if(state === 'Table') {
            return 'Details';
        } else {
            return 'Table';
        }
    } else {
        return state;
    }
}

export default visibilityFilter