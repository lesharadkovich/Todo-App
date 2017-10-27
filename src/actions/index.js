let index = 5;

export function addCard(name, typeOfCard, status, description) {
    return {
        type: 'ADD_NEW_CARD',
        id: index++,
        name,
        typeOfCard,
        status, 
        description
    }
}

export function editCard(id, name, typeOfCard, status, description) {
    return {
        type: 'EDIT_CARD',
        id,
        name,
        typeOfCard,
        status, 
        description
    }
}


export function sortByIdDesc(a, b) {
    return a.id < b.id;
}

export function sortByIdAsc(a, b) {
    return a.id > b.id;
}