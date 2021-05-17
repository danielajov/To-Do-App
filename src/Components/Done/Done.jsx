import React from 'react';
import '../../Components/style.scss';
import { TiTimes } from 'react-icons/ti';

const Done = (props) => {
  const { todos, deleteTodoHandler } = props;

  return (
    <div className="div-container">
      <div>
        <p>DONE</p>
      </div>
      {todos.map(
        (todo, index) =>
          todo.isDone && (
            <div className="todos" key={todo.id}>
              <div className="to-do-container">
                <div className="todo1">
                  <p>{todo.name}</p>
                </div>
                <div className="all-btn">
                  <button
                    className="btn btn-delete"
                    type="delete"
                    onClick={() => deleteTodoHandler(todo.id)}
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

export default Done;
