import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question({ id, title, info }) {
  const [display, setDisplay] = useState(false);
  return (
    <article className="question" key={id}>
      <header>
        <h4>{title}</h4>
        {display ? (
          <button className="btn" onClick={() => setDisplay(false)}>
            <AiOutlineMinus />
          </button>
        ) : (
          <button className="btn" onClick={() => setDisplay(true)}>
            <AiOutlinePlus />
          </button>
        )}
      </header>
      {display ? <p>{info}</p> : <p></p>}
    </article>
  );
}
