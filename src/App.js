import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//components
import Header from "./site/Header";
import SideNav from "./site/SideNav";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  //get location
  const geo = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };

  const geoSuccess = (pos) => {
    var crd = pos.coords;
    setLatitude(Math.floor(crd.latitude * 100) / 100); //rounded to two decimal places
    setLongitude(Math.floor(crd.longitude * 100) / 100); //rounded to two decimal places
  };

  useEffect(() => {
    geo();
  }, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <SideNav latitude={latitude} longitude={longitude} />
      </Router>
    </div>
  );
}

export default App;
