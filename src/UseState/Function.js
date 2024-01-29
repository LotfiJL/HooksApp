import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Coount() {
  const [count, setCount] = useState(0);

  //const handleC = () => {
  //  setCount((prevcount) => {
  //    return prevcount + 1;
  //  });
  // };
  console.log(count);
  return (
    <div>
      <h1 style={{ margin: "20px", backgroundColor: "magenta" }}>
        Count : {count}{" "}
      </h1>
      <Button
        variant="success"
        value={count}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Click here
      </Button>
    </div>
  );
}

export default Coount;
