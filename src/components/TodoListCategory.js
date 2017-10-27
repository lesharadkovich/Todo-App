import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { editCard } from '../actions'

function allowDrop(event) {
    event.preventDefault()
}

let drag = (todo) => {
    return event => {
        let elements = document.getElementsByClassName('dragarea');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('dragging');
        }
        
        event.dataTransfer.setData("text", todo)
    }
}

let drop = (category, dispatch) => {
    return event => {
        event.preventDefault()

        let elements = document.getElementsByClassName('dragarea');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('dragging');
        }
        document.body.style.background = 'aliceblue';

        let todo = event.dataTransfer.getData("text")
        todo = JSON.parse(todo)
        dispatch(todo.id, todo.name, todo.type, category, todo.description)
    }
}

const TodoListCategory = ({ todos, category, onTodoClick, onDrop }) => (
    <div className='dragarea' onDrop={drop(category, onDrop)} onDragOver={allowDrop}>
        <ul>
            {todos.map((todo, index) => {
                let className = 'todoCard ' + todo.type;
                let url = '/details/' + todo.id;

                return (
                    <li key={todo.id} draggable="true" onDragStart={drag(JSON.stringify(todo))}>
                        <Link to={url} >
                            <div className={className}>
                                <p> #{todo.id} {todo.name}</p>
                                <i
                                    className="fa fa-trash fa-2x"
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
        todos: getTodos(state, ownProps.category),
        category: ownProps.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: (id) => {
            dispatch({ type: 'DELETE_CARD', id: id })
        },
        onDrop: (id, name, typeOfCard, status, description) => {
            dispatch(editCard(id, name, typeOfCard, status, description))
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListCategory)

export default TodoList