import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoListCategory'
import AddTodo from './AddTodo'

let Table = ({ dispatch }) => {
    let input, selectType, selectStatus;

    return (
    <div>
        <div className='table'>
            <div className='tableColumn'>
                <p className='categoryName'>Todo</p>
                
                <TodoList category="ToDo">
                </TodoList>
            </div>

            <div className='tableColumn'>
                <p className='categoryName'>In Progress</p>
                
                <TodoList category="InProgress">
                </TodoList>
            </div>

            <div className='tableColumn'>
                <p className='categoryName'>Done</p>
                
                <TodoList category="Done">
                </TodoList>
            </div>
        </div>

        <AddTodo />
        
    </div>    
)}

// Table = connect()(Table)

export default Table;