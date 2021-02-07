import React from "react";
// import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
// import App from './../App';
import "./Zomato.css";

const Zomato = (props) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [zomato, setZomato] = useState();

  // const baseUrl = `https://developers.zomato.com/api/v2.1/geocode`;
  // const key = 'f0b8f4f1370b6c9eb8cc12e061b6c06f';

  const geo = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };
  const geoSuccess = (pos) => {
    // const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${pos.coords.latitude}`);
    console.log(`Longitude: ${pos.coords.longitude}`);
    setLatitude(pos.coords.latitude);
    setLongitude(pos.coords.longitude);
  };
  useEffect(() => {
    geo();
    let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
    fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Key": "f0b8f4f1370b6c9eb8cc12e061b6c06f",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => setZomato(json.nearby_restaurants))
      .then((json) => console.log(zomato))
      .catch(console.log);
  }, []);

  return (
    <div className="zom-body">
      <h1>Restaurants near you!</h1>
      <div className="restaurant-card">
        <p>{zomato}</p>
      </div>
    </div>
  );
};

export default Zomato;
