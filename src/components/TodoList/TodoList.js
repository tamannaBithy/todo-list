import React from 'react';

const TodoList = ({ todos, setTodos }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <div>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input type="text" value={todo.title} onChange={e => e.preventDefault()} />

                        <div>
                            <button>
                                <i class="fas fa-check-circle"></i>
                            </button>
                            <button>
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