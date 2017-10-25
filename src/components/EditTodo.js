import React from 'react'
import { connect } from 'react-redux'

function editCard(id, name, typeOfCard, status) {
    return {
        type: 'EDIT_CARD',
        id,
        name,
        typeOfCard,
        status
    }
}

let EditTodoContainer = ({ id, onTodoClick }) => {
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

                    onTodoClick(id, input.value, selectType.value, selectStatus.value)
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


const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id, input, selectType, selectStatus) => {
            dispatch(editCard(id, input, selectType, selectStatus))
        }
    }
}

// const EditTodo = connect()(EditTodoContainer);

const EditTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodoContainer)


export default EditTodo;