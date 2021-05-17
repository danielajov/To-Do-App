import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import Todo from './Components/Todo/Todo.jsx';
import Done from './Components/Done/Done.jsx';
import './Components/style.scss';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodosState] = useState([
    {
      id: uuidv4(),
      name: 'First Todo',
      isDone: false,
    },
    {
      id: uuidv4(),
      name: 'Second Todo',
      isDone: false,
    },
    {
      id: uuidv4(),
      name: 'Third Todo',
      isDone: false,
    },
  ]);

  const deleteTodoHandler = (id, name) => {
    if (window.confirm(`Are you sure you want to remove this ${name} ?`)) {
      const deleteTodo = todos;
      deleteTodo.splice(
        deleteTodo.findIndex(function (i) {
          return i.id === id;
        }),
        1
      );
      console.log();
      // console.log(id);
      // console.log(deleteTodo);
      setTodosState([...deleteTodo]);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="wrapper-div">
        <Todo
          todos={todos}
          setTodosState={setTodosState}
          deleteTodoHandler={deleteTodoHandler}
        />
        <Done
          todos={todos}
          setTodosState={setTodosState}
          deleteTodoHandler={deleteTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
