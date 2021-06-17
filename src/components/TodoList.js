import React from 'react';
import Todo from './Todo';

const TodoList= ({todos, setTodos})  => {
    return (
        <div>
            <h1>Mes todos</h1>
            {todos.map(todo =>
                <Todo 
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                    key={todo.id}
                    title={todo.text}
                />
                )}
                
            
        </div>
    )
}

export default TodoList
