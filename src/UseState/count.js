// Ici c'est le contenu npermettant de travailler avec usestate et counter

import "./App.css";
import { useState, useEffect } from "react";

const Counter = () => {
  const [Count, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter((Count) => Count + 1);
    }, 1000);
  });

  return <h1>Count : {Count}</h1>;
};

export default Counter;
