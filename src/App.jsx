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

const App = () => {
  return (
    <div className="flex flex-col  gap-6">
      <div className="flex justify-center items-center flex-col w-screen h-screen bg-gradient-to-r from-blue-600 to-violet-600">
        <Counter />
      </div>
      <div className="flex flex-col items-center justify-center w-screen h-screen  ">
        <h1 className="text-5xl ">Todo list</h1>
        <Todos />
      </div>

      <div>
        <Meals />
      </div>

      <div>
        <Calculater />
      </div>
      <div>
        <Togglebackground />
      </div>
      <div>
        <HiddenSearchbar />
      </div>
      <div className="w-screen h-screen flex items-center justify-center space-y-2">
        <Testimonial />
      </div>
      <div className="flex items-center justify-center  h-screen w-screen p-4 flex-col gap-2 bg-purple-500">
        {accordionData.map(({ title, content }) => (
          <Acoordian title={title} content={content} />
        ))}
      </div>
      <div className="flex items-center justify-center  w-screen h-screen bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">
        <Form />
      </div>
      <div className="w-screen h-screen flex  flex-col items-center justify-center">
        <Stopwatch />
      </div>
    </div>
  );
};

export default App;
