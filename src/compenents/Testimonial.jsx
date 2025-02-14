import React, { useState } from 'react'

const Testimonial = () => {
const [currentIndex,setCurrentIndex]=useState(0);
const testimonial=[{
  quote:"This is the best product I've ever used!",
  author:"Jane Doe",
},{
  quote:"I highly recomended this product to everyone!",
  author:"John smith",
},{
  quote:"This product has compeletly changed my life",
  author: "bob johnson",
}]

const handleprevclick=()=>{

  setCurrentIndex(
    (currentIndex+testimonial.length-1)%testimonial.length

  )

}

const handlenextclick=()=>{
setCurrentIndex(
  (currentIndex+1)%testimonial.length
)

  
}
  return (
    <div className='w-80 h-40 p-2  bg-sky-100 rounded-md flex flex-col  justify center '>
      <div className='flex items-center justify-center flex-col'>
      <div>
        {testimonial[currentIndex].quote}
       </div>
       <div>
        {testimonial[currentIndex].author}
       </div>
      </div>
       
       <div className='flex flex-row  justify-between'>
        <button className='flex items-center justify-center w-20 h-10 p-2 text-white bg-sky-700 rounded-md' onClick={handleprevclick}>prev</button>
        <button className='flex items-center justify-center w-20 h-10 p-2 text-white bg-sky-700 rounded-md' onClick={handlenextclick}>next</button>
       </div>
         
    </div>
  )
}

export default Testimonial