import React, { useState, useRef } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null); // Ref for dynamic height

  return (
    <section className=" w-100 p-4 rounded-md bg-white text-black">
      {/* Title Section */}
      <div
        className="flex justify-between items-center p-2 rounded-md cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <p className="text-xl flex items-center justify-center text-white font-bold bg-purple-500 h-10 w-10 rounded-full">{isActive ? "−" : "+"}</p>
      </div>

      {/* Animated Content Section */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
          opacity: isActive ? 1 : 0,
        }}
      >
        <p className="p-2">{content}</p>
      </div>
    </section>
  );
};

export default Accordion;
