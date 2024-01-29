import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ADD({ IT }) {
  const [temp, setTemp] = useState("");

  const handleChange = (e) => {
    setTemp(e.target.value);
  };

  const handleTT = (e) => {
    IT(temp);
    e.preventDefault();
    setTemp("");
  };

  return (
    <div className="container" style={{ margin: "50px" }}>
      <input
        tye="text"
        placeholder="Item to Add"
        value={temp}
        onChange={handleChange}
      />
      <Button variant="primary" onClick={handleTT}>
        Click to Add
      </Button>
    </div>
  );
}

export default ADD;
