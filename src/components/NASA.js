import { useState, useEffect } from "react";

const NASA = () => {
  //states
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [url, setUrl] = useState();

  //api constants
  const apiKey = "Feg2He9MO8QQwfv727oLBFgBGw1x2FtciQWPWY68";
  const date = "2015-01-01";
  const dim = 0.05;

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

  useEffect(() => {
    setUrl(
      `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${date}&dim=${dim}&api_key=${apiKey}`
    );
  }, [latitude, longitude]);

  return (
    <div>
      <h1>NASA Satellite Image</h1>
      <h3>{"Coordinates: Longitude=" + longitude + " Latitude=" + latitude}</h3>
      {longitude && latitude ? (
        <img src={url} style={{ minWidth: 250, maxWidth: 350 }} />
      ) : (
        <p>Image pending...</p>
      )}
    </div>
  );
};

export default NASA;
