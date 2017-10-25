import React from 'react'
import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'


const TodoListCategory = ({todos}) => (
    <div>
        <ul>               
            {todos.map((todo, index) => {
                let className = 'todoCard ' + todo.type;
                
                return (
                    <li className={className} key={index}> 
                        <p> #{todo.id} { todo.name } </p>
                    </li>
                )
            })}
        </ul>
    </div>
)


const getTodos = (todos, category) => {
    return todos.filter(function(todo) {
        if(todo.status === category)
            return todo;
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getTodos(state.todos, ownProps.category)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onTodoClick: id => {
        //     dispatch(toggleTodo(id))
        // }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListCategory)

export default TodoList