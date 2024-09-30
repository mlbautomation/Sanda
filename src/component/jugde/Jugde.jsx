import { useState } from "react";
import "./Jugde.css";

const Judge = () => {
  const [countRed, setCountRed] = useState(0);
  const [countBlue, setCountBlue] = useState(0);

  return (
    <div className="main-container">
      <h1 className="title">Vista del Juez</h1>
      <div className="score">
        <button
          onClick={() => setCountRed((countRed) => countRed + 1)}
          className="plusRed"
        >
          {countRed}
        </button>
        <button
          onClick={() => setCountBlue((countBlue) => countBlue + 1)}
          className="plusBlue"
        >
          {countBlue}
        </button>
      </div>
      <div className="options">
        <button
          onClick={() => setCountRed((countRed) => countRed - 1)}
          className="minusRed"
        >
          -
        </button>
        <button onClick={console.log("Enviando...")} className="send">
          Send
        </button>
        <button
          onClick={() => setCountBlue((countBlue) => countBlue - 1)}
          className="minusBlue"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Judge;
