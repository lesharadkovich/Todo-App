import React from 'react'
import { Link } from 'react-router-dom';

import TodoList from './TodoListCategory'

let Table = ({ dispatch }) => (
    <div>
        <div className='table'>
            <div className='tableColumn'>
                <h2 className='categoryName'>Todo</h2>
                
                <TodoList category="ToDo">
                </TodoList>
            </div>

            <div className='tableColumn'>
                <h2 className='categoryName'>In Progress</h2>
                
                <TodoList category="InProgress">
                </TodoList>
            </div>

            <div className='tableColumn'>
                <h2 className='categoryName'>Done</h2>
                
                <TodoList category="Done">
                </TodoList>
            </div>
        </div>        
    </div>    
)

export default Table;