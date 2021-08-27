import React from 'react'
import Todo from './Todo'

export default function TodoList({todo}) {
    return (
    <div className="todo-container">

        <ul className="todo-list">
            {todo.map(item=>(
                <Todo todo={todo.inputText}/>
            ))}
        </ul>

    </div>
    )
}
