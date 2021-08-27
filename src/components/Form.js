import React from 'react'

export default function Form({text,setText,todo,setTodo}) {

    const inputHandler = (e) =>{

        setText(e.target.value)

    }

    const submitTodo = (e) =>{
        e.preventDefault();

        setTodo(

            [...todo,{inputText:text,completed:false,id:Math.random() }]
        )
        setText("")

        //console.log(setTodo)


    }

    return (
      
  <form>

    <input value={text} onChange={inputHandler} type="text" className="todo-input" />
      <button onClick={submitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Incomplete</option>
        </select>
    </div>
  
  </form>
    
    )
}
