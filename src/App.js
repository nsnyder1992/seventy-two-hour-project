import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";



function App() {
  const [cords, setCords] = useState();

  const geo = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

  const geoSuccess = (pos) => {
    var crd = pos.coords;


    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);


    setCords(pos.cords);
  };

  useEffect(() => {
    geo();
  }, []);


  return (
    <div className="App">
      <Zomato />
    </div>
  );
}
export default App;
