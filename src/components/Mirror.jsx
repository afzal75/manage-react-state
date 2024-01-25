import { useState } from "react";

/* eslint-disable react/prop-types */
function Mirror({ messageColor }) {
  const [color, setColor] = useState(messageColor);
  const handleChangeColor = () => {
    setColor("#1b1b1b");
  };
  return (
    <div>
      <div style={{ color: color }}>Hello World</div>
      <br />
      <button onClick={handleChangeColor}>Change Color From Child</button>
    </div>
  );
}

export default Mirror;
