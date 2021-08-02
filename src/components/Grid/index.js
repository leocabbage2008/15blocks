import React from "react";
import Block from ".././Block";

export default function Grid({ content, clickHandle }) {
  return (
    <div className="grid">
      {content.map((v) => (
        <Block
          key={content.indexOf(v)}
          num={v}
          clickHandler={() => clickHandle(content.indexOf(v))}
        />
      ))}
    </div>
  );
}
