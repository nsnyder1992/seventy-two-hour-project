import { useState, useEffect } from "react";

//components
import Zomato from "../components/Zomato";
import NASA from "../components/NASA";
import Weather from "../components/Weather";

const LocationBody = (props) => {
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
    <div>
      <Zomato latitude={latitude} longitude={longitude} />
      <NASA latitude={latitude} longitude={longitude} />
      <Weather latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default LocationBody;
