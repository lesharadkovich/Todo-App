import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import { toggleTodo } from '../actions'


const TodoListCategory = ({ todos, onTodoClick }) => (
    <div>
        <ul>
            {todos.map((todo, index) => {
                let className = 'todoCard ' + todo.type;
                let url = '/details/' + todo.id;

                return (
                    <li>
                        <Link to={url} key={todo.id}>
                            <div className={className}>
                                <p> #{todo.id} {todo.name}</p>
                                <i
                                    class="fa fa-trash fa-2x"
                                    onClick={e => {
                                        e.preventDefault()
                                        onTodoClick(todo.id)
                                    }}
                                ></i>
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
)


const getTodos = (todos, category) => {
    return todos.filter(function (todo) {
        if (todo.status === category) return todo;
    });
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getTodos(state, ownProps.category)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch({ type: 'DELETE_CARD', id: id })
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListCategory)

export default TodoList