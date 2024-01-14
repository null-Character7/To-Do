import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hello } from './components/hello'
import { CreateTodo } from './components/createTodo'
import { Todo } from './components/todos'

function App() {

  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos")
    .then(async function (res) {
      const json = await res.json();
      console.log(json);
      setTodos(json);
    })
  return (
    <div>
         <CreateTodo> </CreateTodo>
       <Todo todos={todos}></Todo> 
      <Hello></Hello>
    </div>
  )
}

export default App
