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

                    <ul key={todo.id} className="mt-8 grid grid-cols-2 gap-4 content-center border-b-2 border-dotted">
                        <input
                            type="text"
                            value={todo.title}
                            onChange={e => e.preventDefault()}
                            className={` bg-teal-50 p-2 text-2xl  ${todo.completed ? "line-through" : ""}`}
                        />

                        <div>
                            <button onClick={() => handleComplete(todo)}>
                                <i class="fas fa-check-circle pr-5 text-green-700 text-xl hover:text-2xl"></i>
                            </button>
                            <button onClick={() => handleEdit(todo)}>
                                <i class="fas fa-edit pr-5 text-amber-600 text-xl hover:text-2xl"></i>
                            </button>
                            <button onClick={() => handleDelete(todo)}>
                                <i class="far fa-trash-alt text-xl text-red-700 hover:text-2xl"></i>
                            </button>
                        </div>

                    </ul>


                ))
            }
        </div>
    );
};

export default TodoList;