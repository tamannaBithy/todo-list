import React from 'react';

const TodoList = ({ todos, setTodos, setEditTodos }) => {


    const handleComplete = (todo) => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.complete }
                }
                return item;
            }))
    }


    const handleEdit = ({ id }) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodos(findTodo);
    }


    const handleDelete = ({ id }) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <div>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="text"
                            value={todo.title}
                            onChange={e => e.preventDefault()}
                            className={`${todo.completed ? "line-through" : ""}`}
                        />

                        <div>
                            <button onClick={() => handleComplete(todo)}>
                                <i class="fas fa-check-circle"></i>
                            </button>
                            <button onClick={() => handleEdit(todo)}>
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onClick={() => handleDelete(todo)}>
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>

                    </li>
                ))
            }
        </div>
    );
};

export default TodoList;