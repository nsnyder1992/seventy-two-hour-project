import { useEffect, useState } from "react";

//components
import Zomato from "./components/Zomato";
import NASA from "./components/NASA";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  //get location
  const geo = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

  const geoSuccess = (pos) => {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    setLatitude(Math.floor(crd.latitude * 10) / 10);
    setLongitude(Math.floor(crd.longitude * 10) / 10);
  };

  useEffect(() => {
    geo();
  }, []);
  return (
    <div className="App">
      <Zomato latitude={latitude} longitude={longitude} />
      <NASA latitude={latitude} longitude={longitude} />
    </div>
  );
}
export default App;
