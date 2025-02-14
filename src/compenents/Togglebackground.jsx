import React, { useState } from 'react'

const Togglebackground = () => {
    const [backgroundColor,setBackgroundcolor]=useState("white")
    const [textcolor,setTextcolor]=useState("#1b1b1b");
    const [buttonstyle,setButtonstyle]=useState("white");


    const handleclick=()=>{
    setBackgroundcolor(backgroundColor==="white"?"#1b1b1b":"white");
    setTextcolor(textcolor==="#1b1b1b"?"#ffa31a":"#1b1b1b");
    setButtonstyle(backgroundColor==="white"?"#1b1b1b":"white");

}

  return (
    <div className='w-screen h-screen ' style={{backgroundColor,color:textcolor}}>
        <button onClick={handleclick} style={{
            buttonstyle,
            color:textcolor,
            border:`2px solid ${textcolor}`
        }}>{backgroundColor ==="#1b1b1b" ?"Black theme":"white theme"}</button>
        <section className=' flex items-center justify-center'>
<h1 className='font-serif text-9xl text-center'>Welcome to A 
    <br/>
    Real world!

</h1>

        </section>
    </div>
  )
}

export default Togglebackground