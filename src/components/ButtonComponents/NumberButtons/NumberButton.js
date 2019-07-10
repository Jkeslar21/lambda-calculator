import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <button onClick={() => props.update(props.num)}>{props.num}</button>
    </>
  );
};

export default NumberButton