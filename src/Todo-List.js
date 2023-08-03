import React, { useState } from "react";
import Todo from "./Todo"

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodos = (todoText) => {
        const newTodos = [...todos, { todoText }];
        setTodos(newTodos);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (!todo) return;
        // console.log(todos);
        addTodos(todo);
        setTodo("");

    }

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo.todoText}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }
                    } />
                <button type="submit">Add todo</button>
            </form>
            {
                todos.map((todo, index) => <Todo
                    todo={todo}
                    index={index}
                    key={index}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo} />)
            }
        </>
    )
}

export default TodoList;