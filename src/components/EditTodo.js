import React from 'react'
import { connect } from 'react-redux'

let index = 5;

function addCard(name, typeOfCard, status, description) {
    return {
        type: 'ADD_NEW_CARD',
        id: index++,
        name,
        typeOfCard,
        status, 
        description
    }
}

function editCard(id, name, typeOfCard, status, description) {
    return {
        type: 'EDIT_CARD',
        id,
        name,
        typeOfCard,
        status, 
        description
    }
}

let EditTodoContainer = ( {todo, onTodoClick, children} ) => {
    let input, selectType, selectStatus, description, saveButton;

    let id = todo ? todo.id : null;
    let defaultInputValue = todo ? todo.name : '';
    let defaultDescription = todo ? todo.description : '';
    let defaultType = todo ? todo.type : '';
    let defaultStatus = todo ? todo.status : '';

    return (
        <div>
            <form 
                className='add'
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }

                    let typeValue = selectType.options[selectType.selectedIndex].value;
                    let statusValue = selectStatus.options[selectStatus.selectedIndex].value;

                    onTodoClick(id, input.value, typeValue, statusValue, description.textContent)
                    saveButton.textContent = 'Saved!'
                }}
            >

                <input 
                    placeholder='Type name' 
                    name='name' 
                    defaultValue={defaultInputValue}
                    ref={node => { input = node }}
                ></input>
            
                <div className='select'>
                    <select defaultValue={defaultType} name='type' ref={node => { selectType = node }}>
                        <option value="task">Task</option>
                        <option value="bug">Bug</option>
                    </select>
                </div>

                <div className='select'>
                    <select defaultValue={defaultStatus} name='status' ref={node => { selectStatus = node }}>
                        <option value="ToDo">ToDo</option>
                        <option value="InProgress">In progress</option>
                        <option value="Done">Done</option>
                    </select>
                </div>

                <div id='description' contentEditable ref={node => { description = node }}>{defaultDescription}</div>
            
                <div className='buttons'>
                    <button className='submitButton' type="submit" ref={node => { saveButton = node }}>Save</button>
                    {children}
                </div>
            </form>
        </div>
    )   
}


const mapStateToProps = (state, ownProps) => {
    let todo;

    for(let i = 0; i < state.length; i++) {
        if(state[i].id == ownProps.id) {
            todo = state[i];
            break;
        }
    }

    return {
        todo: todo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick: (id, input, selectType, selectStatus, description) => {
            if(ownProps.action === 'Edit') {
                dispatch(editCard(id, input, selectType, selectStatus, description))
            } else if(ownProps.action === 'Add') {
                dispatch(addCard(input, selectType, selectStatus, description))
            }
        }
    }
}

const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodoContainer)


export default EditTodo;