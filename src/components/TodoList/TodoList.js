import React from 'react';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input type="text" value={todo.title} onChange={e => e.preventDefault()} />
                    </li>
                ))
            }
        </div>
    );
};

export default TodoList;