import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button onClick={() => props.update(props.op.value)}>{props.op.char}</button>
    </>
  );
};

export default OperatorButton