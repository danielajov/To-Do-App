import React, { useState } from 'react';
import '../../Components/style.scss';
// import Blends from '../Blends/Blends';
import { TiTick, TiTimes } from 'react-icons/ti';
import { v4 as uuidv4 } from 'uuid';

const Todo = (props) => {
  const { todos, setTodosState, deleteTodoHandler } = props;
  // const [isTextShown, setIsTextShown] = useState(false);
  const [newTodo, setNewTodo] = useState({});

  const onChange = (event) => {
    setNewTodo({
      id: uuidv4(),
      name: event.target.value,
      isDone: false,
    });

    console.log(event.target.value);
  };

  const addNewTodo = () => {
    if (newTodo.name) {
      setTodosState([...todos, newTodo]);
      setNewTodo({});
    } else {
      alert('Empty value. Please enter a value!');
    }
  };

  // const addNewTodo = () => {
  //   if (newTodo !== 0 ) {
  //   setTodosState([...todos, newTodo])}
  //   };

  const onSubmitHandler = (todoId) => {
    // console.log(todoId);
    const changedArray = todos.map((todo, index) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: true };
      } else {
        return todo;
      }
    });
    setTodosState(changedArray);
  };

  //console.log(todos);

  // const showTextHandler = () => {
  //   console.log('Hello from Add Event Handler!');
  // };

  return (
    <div className="div-container">
      <div>
        <p>TODO</p>
      </div>
      <form>
        <input
          type="text"
          id="new-todo-input"
          className="input"
          name="text"
          autoComplete="off"
          placeholder="Add todo"
          onChange={onChange}
          value={newTodo.name || ''}
        />
        <button className="btn btn-add" onClick={addNewTodo} type="button">
          +
        </button>
      </form>
      {/* {isTextShown ? <Blends /> : null} */}
      {todos.map(
        (todo, index) =>
          todo.isDone === false && (
            <div className="todos" key={todo.id}>
              <div className="to-do-container">
                <div className="todo1">
                  <p>{todo.name}</p>
                </div>
                <div className="all-btn">
                  <button
                    className="btn btn-submit"
                    type="submit"
                    onClick={() => onSubmitHandler(todo.id)}
                  >
                    <TiTick />
                  </button>
                  <button
                    className="btn btn-delete"
                    type="delete"
                    onClick={() => deleteTodoHandler(todo.id, todo.name)}
                  >
                    <TiTimes />
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Todo;
