import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Meals = () => {

    const [items,setItems]=useState([]);
useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert").then((res)=>{
        setItems(res.data.meals)
        console.log(res.data.meals);
        
    }
    
    ).catch((error)=>{
        console.log(error);
    })
}, [])

const itemList= items.map(({strMeal,strMealThumb,idMeal})=>{
    return(
        <section className='p-4 bg-pink-100 rounded-md w-70 h-75 hover:bg-pink-200'>
            <img className='w-70 h-50 rounded-md hover:cursor-pointer hover:h-53' src={strMealThumb} alt={strMeal} />
           <section className='flex flex-row  justify-between '>
           <p>{strMeal}</p>
           <p>#{idMeal}</p>

           </section>

        </section>
    )
})

  return (
    <div className='flex  flex-wrap gap-5 items-center  justify-center'>
        {itemList}
    </div>
  )
}

export default Meals