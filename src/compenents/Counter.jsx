import React, { useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0);


const handleIncrement=()=>{
    setCount(count+1);
}
const handledecrement=()=>{

    if(count==0) return;

    setCount(count-1);
}

  return (
    <div className='flex items-center justify-center flex-col w-50  p-4 bg-black border-4 rounded-lg  border-purple-500 shadow-white-500/50'>
        <h1 className='text-9xl text-white font-light'>{count}</h1>
        <div className='flex flex-row w-50 justify-around'>
        <button className='flex  font-light items-center justify-center p-4 text-5xl text-white w-10 h-10 rounded-full  border-4 border-sky-500' onClick={handleIncrement}>+</button>
        <button className=' flex items-center font-light justify-center  p-4 text-5xl text-white w-10 h-10 rounded-full border-4 border-sky-500' onClick={handledecrement}>-</button>
        </div>
    </div>
  )
}

export default Counter