import { useState } from "react";
import TravelPlan from "./components/TravelPlan";
// import Form from "./components/Form";
// import Forms from "./components/Forms";
// import Mirror from "./components/Mirror";
// import Travel from "./components/Travel";
// import TravelEditable from "./components/TravelEditable";

function App() {
  const [color, setColor] = useState("red");

  const handleChangeColor = () => {
    setColor("blue");
  };
  return (
    <div>
      <TravelPlan />
    </div>
    // <div>
    //   <Mirror messageColor={color} />
    //   <br />
    //   <button onClick={handleChangeColor}>Change Color For Parent</button>
    // </div>
  );
}

export default App;
