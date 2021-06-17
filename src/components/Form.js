import React from 'react'

const Form = ({answerForm, setAnswerForm, todos, setTodos}) => {
  const answerInput = e =>{
      setAnswerForm(e.target.value);
  }
  const submitTodo = e =>{
      e.preventDefault();
      setTodos([
          ...todos, {text :answerForm, completed: false, id:Math.floor(Math.random() * 10000)}
      ])
      setAnswerForm("");
      }

    return (
        <div>
            <form  className='todo-form'>
                <input 
                    value={answerForm}
                    className="todo-input"
                    type="text"
                    onChange={answerInput}
                />
                <button  onClick={submitTodo} className="todo-button" type="submit">
                    Update
                </button>
            </form>
        </div>
    )
}

export default Form;
