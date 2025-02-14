import React from "react";
import Calculater from "./compenents/Calculater";
import Meals from "./compenents/Meals";
import Togglebackground from "./compenents/Togglebackground";
import HiddenSearchbar from "./compenents/HiddenSearchbar";
import Testimonial from "./compenents/Testimonial";
import Counter from "./compenents/Counter";
import { accordionData } from "./utils/AccordianData";
import Acoordian from "./compenents/Acoordian";
import Form from "./compenents/Form";
import Stopwatch from "./compenents/Stopwatch";
import Todos from "./compenents/Todos";
import Accordion from "./compenents/Acoordian";

const App = () => {

  const project = {
    home : "#home",
    counter : "#counter",
    todo : "#todo",
    calculater:"#calculater",
    Form:"#form",
    Meals:"#meals",
    HiddenSearchbar:"#hiddenSearchBar",
    Accordion:"#accordian",
    Stopwatch:"#stopWatch",
    Testimonial:"#testimonial",
    Togglebackground:"#toggleBackground",
  }

  return (
    <div className="flex flex-col overflow-hidden  gap-6">
      <nav className="fixed top-2 bg-blue-400/30 overflow-hidden backdrop-blur-md p-4 flex  items-center justify-center space-x-2 w-full"  >
        {
          Object.entries(project).map(([keys,value])=>(
            <div>
              <a className='w-20 h-10 p-2 bg-sky-800 border-2 rounded-md text-white border-sky-600' href={value} >
                {keys}
              </a>
            </div>
          ))
        }
      </nav>
      <div className="mt-20 text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" > 
        Hello I'm tushar ruhela
        <div>These are my Basic React projects</div>

      </div>
      <div id="counter" className="flex justify-center items-center flex-col w-screen h-screen bg-gradient-to-r from-blue-600 to-violet-600">
        <h1 >Counter</h1>
        <Counter />
      </div>
      <hr/>
      <div id="todo" className="flex flex-col items-center justify-center w-screen h-screen  ">
        <h1 className="text-5xl ">Todo list</h1>
        <Todos />
      </div>
      <hr/>
      <div id="meals">
        <Meals />
      </div>
      <hr/>
      <div id="calculater" >  
        <Calculater />
      </div>
      <hr/>
      <div id="toggleBackground">
        <Togglebackground />
      </div>
      <hr/>
      <div id="hiddenSearchBar">
        <HiddenSearchbar />
      </div>
      <hr/>
      <div id='testimonial' className="w-screen h-screen flex items-center justify-center space-y-2">
        <Testimonial />
      </div>
      <hr/>
      <div id="accordian" className="flex items-center justify-center  h-screen w-screen p-4 flex-col gap-2 bg-purple-500">
        {accordionData.map(({ title, content }) => (
          <Acoordian title={title} content={content} />
        ))}
      </div>
      <hr/>
      <div id="form" className="flex items-center justify-center  w-screen h-screen bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">
        <Form />
      </div>
      <hr/>
      <div id="stopWatch" className="w-screen h-screen flex  flex-col items-center justify-center">
        <Stopwatch />
      </div>
      <hr/>
    </div>
  );
};

export default App;
