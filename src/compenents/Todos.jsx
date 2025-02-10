import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return; // Prevent empty todos

    setTodos((todos) => [
      ...todos,
      { text: input, id: Math.floor(Math.random() * 1000) } // Avoid duplicate IDs
    ]);

    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div className= 'flex  flex-col gap-2 items-center justify-center h-auto w-xl  p-2'>
      <div className='flex gap-2 '>
      <input
      className=' bg-gradient-to-r from-blue-200 to-violet-200 rounded-md p-2  '
           type="text"
        value={input}
        placeholder="Write todos"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='bg-sky-600 p-0.5 w-20 rounded-lg' onClick={handleSubmit}>Add</button>
      </div>
      
      <ul role="list" className='list-disk flex flex-col gap-2'>
        {todos.map(({ text, id }) => (
          <li className=' bg-gradient-to-r from-blue-300 to-violet-300 p-2 rounded-md flex gap-2' key={id}>
            <span>{text}</span>
            <button className='bg-sky-800 text-cyan-100 p-0.5 w-10 rounded-md' onClick={() => removeTodo(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
