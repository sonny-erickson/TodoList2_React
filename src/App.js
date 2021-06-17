import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React, {useState, useEffect} from 'react';

function App() {
const [answerForm, setAnswerForm] = useState('');
const [todos, setTodos] = useState([]);


  return (
    <div className="todo-app">
      <h1>ma todoList blabla</h1>
      <Form
        answerForm={answerForm}
        setAnswerForm={setAnswerForm}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
