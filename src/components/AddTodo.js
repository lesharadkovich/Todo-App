import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import EditTodo from './EditTodo'
import { addCard, editCard } from '../actions'


let AddTodo = ({ onTodoClick }) => {
    return (
        <div className='todoEditPage'>
            <EditTodo action='Add' onTodoClick={onTodoClick} />

            <Link to="/"><div className='backButton'>Back</div></Link>
        </div>
    )
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => {
    return {
        onTodoClick: (id, input, selectType, selectStatus, description, action) => {
            dispatch(addCard(input, selectType, selectStatus, description))
            props.history.push('/');
        }
    }
}

AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)
// AddTodo = connect()(AddTodo)

export default AddTodo;