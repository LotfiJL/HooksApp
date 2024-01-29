import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
function FuncApproach() {
  const [count, setCount] = useState(0);

  const HandleIt = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });
  return (
    <div>
      <Button variant="info" onClick={HandleIt}>
        Click here
      </Button>
    </div>
  );
}

export default FuncApproach;
