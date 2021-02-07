import { useEffect, useState } from "react";

//components
import Zomato from "./components/Zomato";
import NASA from "./components/NASA";

function App() {
  return (
    <div className="App">
      <Zomato />
      <NASA />
    </div>
  );
}
export default App;
