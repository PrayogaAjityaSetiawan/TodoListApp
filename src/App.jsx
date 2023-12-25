import Form from "./components/Form"
import { useEffect, useState } from "react";
import TodoList from "./components/Todolist";
import { Toaster } from "react-hot-toast";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])


  useEffect (() => {
    setTimeout(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, 1000);
  },[todos]);


  useEffect (() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  },[]); 

  return (
    <>
      <div className="w-full h-[100dvh] bg-gradient-to-r from-emerald-400 to-cyan-400 flex flex-col items-center  ">
        <Toaster
              position="top-center"
              reverseOrder={false}
        />
        <div className="bg-white/30 backdrop-blur-md lg:w-[400px] drop-shadow-md p-3 lg:p-5 rounded-lg m-20 ">
          <header>
            <h1 className="text-3xl font-bold text-white">To do List App</h1>
          </header>
          <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos} />
          <TodoList todos={todos} setTodos={setTodos}/> 
          </div>
      </div>
    </>
  )
}

export default App
