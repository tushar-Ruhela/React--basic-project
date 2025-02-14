import React, { useState } from 'react'

const Calculater = () => {

const [inputValue,setInputvalue]=useState("");

const display=(value)=>setInputvalue(inputValue+value);

const calculate=()=>setInputvalue(eval(inputValue));

const clear=()=>setInputvalue("")

const obj = {"/":"/",
  "*":"*",
  "7":"7",
  "8":"8",
  "9":"9",
  "-":"-",
  "4":"4",
  "5":"5",
  "6":"6",
    "+":"+",
  "1":"1",
  
  "2":"2",
  "3":"3",
  "0":"0",
  "00":"00",
  ".":".",
}
  return (
    <div className='bg-gray-800 w-screen h-200'>
<form name='calcu' className=' flex flex-col  items-center justify-center h-screen  space-y-2 '>

<div className='py-2 p-4 flex justify-items-start  h-10 border-2  w-60 bg-white relative left-[-9px]' >{inputValue}</div>
<div className='flex flex-wrap w-60 h-80 gap-1' >

<span className='flex items-center justify-center  w-18 h-18 rounded-md bg-orange-400 text-white text-xl ' onClick={()=>clear()}> c</span>
{Object.entries(obj).map(([key,value])=>(
  <span key={key} className='flex items-center justify-center  w-18 h-18 rounded-md bg-black text-white text-xl ' onClick={()=>display(value)}>{value}</span> 
))}

<span className='flex items-center justify-center  w-18 h-18 rounded-md bg-black text-white text-xl ' onClick={()=>calculate()}>=</span>
</div>

</form>
    </div>
  )
}

export default Calculater