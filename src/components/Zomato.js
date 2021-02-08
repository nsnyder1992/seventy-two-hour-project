import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

import "./Zomato.css";

const Zomato = ({ latitude, longitude }) => {
  const [zomato, setZomato] = useState([]);

  const handleSubmit = () => {
    if (latitude !== undefined && longitude !== undefined) {
      let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;
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
            tempZomato.push({
              id: restaurant.restaurant.id,
              name: restaurant.restaurant.name,
            })
          );
          setZomato(tempZomato);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="zom-body main">
      <div className="mainDiv">
        <h1>Restaurants near you!</h1>
        <Button onClick={handleSubmit}>Try it out!</Button>
        {zomato.map((restaurant) => {
          return (
            <div className="restaurant-card" key={restaurant.id}>
              <p>{restaurant.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Zomato;
