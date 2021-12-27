import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);

  return (
    <div className="App border border-indigo-600">

      <Header></Header>

      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodos={editTodos}
        setEditTodos={setEditTodos}
      ></Form>

      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodos={setEditTodos}
      ></TodoList>

    </div>
  );
}

export default App;
