import { useEffect, useState } from 'react';
import axios from 'axios';

const Pagess = () => {
  const [todos, setTodos] = useState([]);
  const [totalpages, setPages] = useState(10);
  const [currentPage, setCurrentPages] = useState(1);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data));
  }, []);

  const numberOftotalPages = Math.ceil(todos.length / totalpages);
  const pages = [...Array(numberOftotalPages + 1).keys()].slice(1);

  const indexOfLastTodo = currentPage * totalpages;
  const indexOFFirstTodo = indexOfLastTodo - totalpages;

  const visibleTodos = todos.slice(indexOFFirstTodo, indexOfLastTodo);

  console.log(pages);

  const previousPageHandler = () => {
    if (currentPage !== 1) setCurrentPages(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage !== numberOftotalPages) setCurrentPages(currentPage + 1);
  };

  return (
    <>
      <select onChange={(e) => setPages(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <div>
        {visibleTodos.map((todo, idx) => {
          return <div key={idx}>{todo.title}</div>;
        })}
        <div className="flex flex-rows items-center justify-center mt-6">
          <span
            onClick={previousPageHandler}
            className={
              currentPage > 1
                ? ' text-blue-600 cursor-pointer mr-2'
                : 'opacity-0'
            }
          >
            Previous
          </span>

          <p>
            {pages.map((page) => (
              <span
                key={page}
                onClick={() => setCurrentPages(page)}
                className={`${
                  currentPage === page
                    ? 'text-red-500 font-semibold bg-slate-200 border border-black'
                    : ''
                }`}
              >{` ${page} `}</span>
            ))}
          </p>
          <span
            onClick={nextPageHandler}
            className={
              currentPage < todos.length / 10
                ? 'text-blue-600 cursor-pointer ml-2'
                : 'opacity-0'
            }
          >
            Next
          </span>
        </div>
      </div>
    </>
  );
};

export default Pagess;
