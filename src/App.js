import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

//components
import Header from "./site/Header";
import Footer from "./site/Footer";

function App() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  //get location
  const geo = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      var crd = pos.coords;
      setLatitude(Math.floor(crd.latitude * 100) / 100); //rounded to two decimal places
      setLongitude(Math.floor(crd.longitude * 100) / 100); //rounded to two decimal places
    });
  };

  return (
    <div className="App">
      <Router>
        <Header latitude={latitude} longitude={longitude} geo={geo} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
