import React from 'react'

const Todo = ({title, todo, todos, setTodos}) => {
    
    const deleteHandle = () =>{
       // La méthode filter() va créer un new array, si l'el id est différent en valeur et en type de todo.id =false
    // et si true on refait le tableau sans cette el
        setTodos(todos.filter((el) => el.id !== todo.id ))
    }

    const completedHandle = () =>{
        setTodos(todos.map(item =>{
            //on va comparer les id s'ils correspondent
            if(item.id === todo.id){
                return{
                    ...item,
                    // on récupère les valeurs de l'item et on change la valeur completed
                    completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <>
             <div className={`todo-row ${todo.completed ? "complete" : ""}`}>
                <li>{title}</li>
                <div className="icons "> 
                    <button className="button-icon " onClick={deleteHandle}>Delete</button>
                    <button className="button-icon" onClick={completedHandle}>Completed</button>
                </div>
            </div>
    
        </>
    )
}

export default Todo
