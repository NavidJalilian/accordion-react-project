import React, { useState } from "react";
import questions from "./data";
import Question from "./Question";
const Questions = () => {
  return (
    <section>
      {questions.map((question) => {
        const { id, info, title } = question;
        return <Question key={id} info={info} title={title} />;
      })}
    </section>
  );
};

export default Questions;
