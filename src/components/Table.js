import React from 'react'
import { Link } from 'react-router-dom';

import TodoList from './TodoListCategory'
import Header from './Header'

let Table = ({ dispatch }) => (
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
    </div>    
)

export default Table;