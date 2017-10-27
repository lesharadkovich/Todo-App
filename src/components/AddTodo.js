import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import EditTodo from './EditTodo'


let AddTodo = () => {
    return (
        <div className='todoEditPage'>
            <EditTodo action='Add'/>

            <Link to="/"><div className='backButton'>Back</div></Link>
        </div>
    )   
}

AddTodo = connect()(AddTodo)

export default AddTodo;