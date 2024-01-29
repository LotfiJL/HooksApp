import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
function FuncApproach() {
  const [count, setCount] = useState(0);
  const [namee, setNamee] = useState("");

  const HandleIt = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Action achieved"); //Condition needed ---
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        className="form-control mx-auto d-block w-50"
        type="text"
        placeholder="Try to Edit"
        value={namee}
        onChange={(e) => setNamee(e.target.value)}
      />
      <Button variant="info" onClick={HandleIt}>
        Click here
      </Button>
    </div>
  );
}

export default FuncApproach;
