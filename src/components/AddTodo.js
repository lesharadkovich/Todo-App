import React from 'react'
import { connect } from 'react-redux'

function addCard(name, typeOfCard, status) {
    return {
        type: 'ADD_NEW_CARD',
        name,
        typeOfCard,
        status
    }
}

let AddTodo = ({ dispatch }) => {
    let input, selectType, selectStatus;

    return (
        <div>
            <form 
                className='add'
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }

                    dispatch(addCard(input.value, selectType.value, selectStatus.value))
                    input.value = ''
                }}
            >

                <input placeholder='Type name' name='name' ref={node => { input = node }}></input>
            
                <select name='type' ref={node => { selectType = node }}>
                    <option value="task">Task</option>
                    <option value="bug">Bug</option>
                </select>

                <select name='status' ref={node => { selectStatus = node }}>
                    <option value="ToDo">ToDo</option>
                    <option value="InProgress">In progress</option>
                    <option value="Done">Done</option>
                </select>
            
                <button type="submit">Add new Todo card</button>
            </form>
        </div>
    )   
}

AddTodo = connect()(AddTodo)

export default AddTodo;