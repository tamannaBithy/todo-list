import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App border border-indigo-600">

      <Header></Header>

      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}

      ></Form>

      <TodoList
        todos={todos}
        setTodos={setTodos}

      ></TodoList>

    </div>
  );
}

export default App;
