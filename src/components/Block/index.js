import React from "react";

export default function Block({ num, clickHandler }) {
  return (
    <div className="block" onClick={clickHandler}>
      {num}
    </div>
  );
}

// Firstly, might be easier to do with a list or 2d list as it's easier to change the values
//in the defaults/block, that's all the elements, they're in a 2d list I
// I means like without the {}
//lemme see if I can see what you're talking about
