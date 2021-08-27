
import React, {useState} from 'react'

import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  return (
    <div className="App">
    <header>
      <h1>To-Do List</h1>
    </header>

    <Form text={text} setText={setText} todo={todo} setTodo={setTodo} />
    <TodoList todo={todo}/>

    </div>
  );
}

export default App;
