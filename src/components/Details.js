import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import EditTodo from './EditTodo'
import { addCard, editCard } from '../actions'

let Details = ({ match: { params }, dispatch, onTodoClick, onDeleteClick }) => {
    return (
        <div className='todoEditPage'>
            <EditTodo id={params.id} action='Edit' onTodoClick={onTodoClick}>
                <button
                    className='deleteCardButton'
                    onClick={e => {
                        onDeleteClick(e, params.id)
                    }}>
                    Delete this card
                </button>
            </EditTodo>

            <br></br>

            <Link to="/"><button className='backButton'>Back</button></Link>
        </div>
    )
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = (dispatch, props) => {
    return {
        onTodoClick: (id, input, selectType, selectStatus, description, action) => {
            if(action === 'Edit') {
                dispatch(editCard(id, input, selectType, selectStatus, description))
                props.history.push('/');
            } else if(action === 'Add') {
                dispatch(addCard(input, selectType, selectStatus, description))
                props.history.push('/');
            }
        },
        onDeleteClick: (event, id) => {
            event.preventDefault()
            dispatch({ type: 'DELETE_CARD', id})
            props.history.push('/');
        }
    }
    
}

Details = connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)
// Details = connect()(Details);

export default Details