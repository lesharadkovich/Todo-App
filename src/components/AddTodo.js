import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import EditTodo from './EditTodo'


let AddTodo = () => {
    return (
        <div>
            <EditTodo action='Add'/>

            <Link to="/"><button className='backButton'>Back</button></Link>
        </div>
    )   
}

AddTodo = connect()(AddTodo)

export default AddTodo;