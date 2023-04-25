import React, { useRef, useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addHandler = () => {
    setTodo('');
    setTodos([...todos, todo]);
    inputRef.current.value = '';
    // console.log(todo);
  };
  return (
    <div>
      <section>
        <h2>My todo list</h2>
        <input
          className="input-text"
          ref={inputRef}
          placeholder="type"
          type="text"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addHandler} id="submit">
          Add Todo
        </button>
        <ul>
          {todos.map((todo, idx) => (
            <li key={idx}>{todo} </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default TodoList;
