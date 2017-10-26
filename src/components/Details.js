import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import EditTodo from './EditTodo'


let Details = ({ match: { params }, dispatch }) => {    
    return (
    <div className='todoEditPage'>
        <EditTodo id={params.id} action='Edit'>
            <button 
                className='deleteCardButton'
                onClick={e => {
                    e.preventDefault()
                    dispatch({type: 'DELETE_CARD', id: params.id})
                }}>
                Delete this card
            </button>
        </EditTodo>

        <br></br>

        <Link to="/"><button className='backButton'>Back</button></Link>
    </div>
)}

Details = connect()(Details);

export default Details