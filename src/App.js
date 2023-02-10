import './App.css';
import {useState, useEffect} from "react";
import { nanoid } from 'nanoid'
import Todo from "./todo.js"
// import todo from './todo.js';

function App() {

  const [todolist, setTodolist] = useState(JSON.parse(localStorage.getItem("todo")) || []);
  const [task, setTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todolist))
  },[todolist]) 

  console.log(todolist)


  function handleChanges(e){
    setTask(e.target.value);
  }

  /*Adding tasks in array */
  function addTask(e){
    e.preventDefault();
    const zadatak = {
      id:nanoid(),
      text:task,
      completed:false,
  }

    if(task === ""){
      setTodolist([...todolist])
    }
    else{
      setTodolist([...todolist, zadatak])
    }

    console.log(todolist)
    setTask("")
   }

   /*Deleting tasks from array */
   function deleteTodo(id){
    setTodolist(prevItem => prevItem.filter(todo => todo.id !== id))
   }

   /* Changing completed value*/
   function handleCompleted(id){
    setTodolist(prevItem => prevItem.map(todo => {
      return id === todo.id ? {...todo, completed: !todo.completed} : {...todo}
    }))
   }

  // function handleCompleted(id){
  //   setTodolist(prevItem => prevItem.map(item => {
  //     if(id === item.id){
  //       return {...item, completed: !item.completed}
  //     }
  //     else{
  //       return item;
  //     }
  //   }))
  // }

  /*Edit and remove task*/ 
   function editTodo(id){
    var todo = todolist.find(item => item.id === id);
    setTask(todo.text);

     setTodolist(prevItem => prevItem.filter(todo => todo.id !== id));
    // console.log(todolist);
    
  }

   const elements = todolist.map(item => {
    return <Todo 
    key={item.id} 
    id={item.id} 
    tekst={item.text} 
    completed={item.completed} 
    deleteTodo={() => deleteTodo(item.id)} 
    editTodo={() => editTodo(item.id)} 
    handleCompleted={() => handleCompleted(item.id)} />;
  })
   

  return (
    <div className="App">
      <div className='main_container'>
        <form>
          <div className='form_container'>
          
            <input type="text" className="input_task" onChange={handleChanges} value={task}></input>
            <button  className="submit" onClick={addTask}>
            <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </form>
        <div className='list_container'>
          <h2>Tasks</h2>
          <ul>
            {elements}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
