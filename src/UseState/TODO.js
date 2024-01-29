import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import ADD from "./addItem";
import Spinner from "react-bootstrap/Spinner";

function TODO() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Study Maths" },
    { id: 2, todo: "Study Physics" },
    { id: 3, todo: "Study Mechanics" },
  ]);

  const AddingHandler = (newItem) => {
    return setTodos([...todos, { id: todos.length + 1, todo: newItem }]);
  };
  const TOO = todos.map((tod) => {
    return (
      <ListGroup key={tod.id}>
        <div className="d-flex align-items-center">
          <p className="mr-2">Step {tod.id}: ___</p>
          <ListGroup.Item
            className="bg-secondary"
            style={{ width: "500px", height: "50px" }}
          >
            {tod.todo}
          </ListGroup.Item>
        </div>
      </ListGroup>
    );
  });

  const deleteItem = () => {
    setTodos(todos.slice(0, todos.length - 1));
  };

  if (todos.length === 0) {
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading ... </span>
        </Spinner>
        <h4 style={{ color: "red" }}>REFREASH ANS START A NEW DAY </h4>
        <button onClick={() => window.location.reload()}>
          Click to Refresh
        </button>
      </>
    );
  }

  return (
    <div className="ALLCSS">
      <h3 className="bg-yellow">List of {todos.length} elements</h3>
      <h4>{TOO}</h4>
      <ADD IT={AddingHandler} />
      <button onClick={deleteItem}> Delete </button>
    </div>
  );
}

export default TODO;

//  const handlCHANGE = (event) => {
//  setTodo([...todos, { id: todos.length + 1, todo: event.target.value }]);
//  };
//  return (
//   <div className="container">
//     <h3>TODO with {todos.length} orders </h3>
//     {TOO}
//
// </div>
// );
