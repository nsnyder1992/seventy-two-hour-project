import React, { useEffect, useState } from "react";

import "./Zomato.css";

const Zomato = ({ latitude, longitude }) => {
  const [zomato, setZomato] = useState([]);

  const handleSubmit = () => {
    if (latitude !== undefined && longitude !== undefined) {
      let url = `https://cors-anywhere.herokuapp.com/http://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
      let tempZomato = [];
      fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Key": "f0b8f4f1370b6c9eb8cc12e061b6c06f",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          json.nearby_restaurants.map((restaurant) =>
            tempZomato.push(restaurant)
          );
          setZomato(tempZomato);
          console.log(zomato);
        })
        .catch(console.log);
    }
  };

  return (
    <div className="zom-body">
      <h1>Restaurants near you!</h1>
      <button onClick={handleSubmit}>Try it out!</button>
    </div>
  );
};

export default Zomato;
