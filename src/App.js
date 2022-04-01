import React, { useState } from "react";
import data from "./data";
import Questions from "./Questions";
import SingleQuestion from "./Questions";
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>

        <Questions />
      </div>
    </main>
  );
}

export default App;
