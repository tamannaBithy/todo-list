import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodos, setEditTodos }) => {

    const updateTodos = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );

        setTodos(newTodo);
        setEditTodos("");
    }

    useEffect(() => {
        if (editTodos) {
            setInput(editTodos.title);
        }
        else {
            setInput("");
        }
    }, [setInput, editTodos])


    const onInputChange = e => {
        setInput(e.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();

        if (!editTodos) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("");
        }
        else {
            updateTodos(input, editTodos.id, editTodos.completed)
        }


    }


    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder="Enter a Todo"
                value={input}
                onChange={onInputChange}
                className="w-1/2 p-3"
                required />

            <button type="submit" className="bg-amber-500 p-3 font-bold">
                {editTodos ? "Ok" : "Add"}
            </button>
        </form>
    );
};

export default Form;