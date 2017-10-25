import React from 'react'
import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'


const TodoListCategory = ({todos, onTodoClick}) => (
    <div>
        <ul>               
            {todos.map((todo, index) => {
                let className = 'todoCard ' + todo.type;
                
                return (
                    <li 
                        className={className} 
                        key={index} 
                        onClick={e => {
                            e.preventDefault()
                            onTodoClick()
                        }}
                    >

                        <p> #{todo.id} { todo.name } </p>
                    </li>
                )
            })}
        </ul>
    </div>
)


const getTodos = (todos, category) => {
    return todos.filter(function(todo) {
        if(todo.status === category) return todo;
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getTodos(state.todos, ownProps.category)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch({type: 'OPEN_DETAILS'})
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListCategory)

export default TodoList