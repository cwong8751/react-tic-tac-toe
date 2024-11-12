import { useState } from "react";

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// individual square 
function Square() {

  // define state vars
  const [val, setVal] = useState(null);

  // handle click
  function handleClick(){
    // set value to X
    setVal('X');
  }

  return <button className="square" onClick={handleClick}>{val}</button>;
}