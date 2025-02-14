import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const HiddenSearchbar = () => {
  const [showInput, setshowInput] = useState(false);
  const [bgColor, setbgColor] = useState("white");

  const handleclick=(e)=>{
    setbgColor("#1a1a1a");

    if(e.target.id==="container"){
        setshowInput(false);
        setbgColor("white")
    }
  }

  return (
    <section className="flex items-center justify-center w-screen h-screen" id="container" style={{ background: bgColor }} onClick={handleclick}>

        {showInput?(< input type="text" placeholder="...search" className='text-white border-2 focus:outline-none border-violet-400 w-50 h-10'/>):(<IoSearch  onClick={()=>setshowInput(true)}/>)}
    </section>
  );
};

export default HiddenSearchbar;
