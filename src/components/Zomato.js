import React, { useState } from "react";
import { Button, CardColumns } from "reactstrap";
import RestaurantCard from "./ResuarantCard";

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
          json.nearby_restaurants.map((restaurant) => {
            tempZomato.push({
              id: restaurant.restaurant.id,
              name: restaurant.restaurant.name,
              rating: restaurant.restaurant.user_rating.aggregate_rating,
              menu: restaurant.restaurant.menu_url,
            });
          });
          setZomato(tempZomato);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className=" main">
      <div className="zom-body mainDiv">
        <h1>Restaurants near you!</h1>
        <Button onClick={handleSubmit}>Try it out!</Button>
        <div className="zom-cards">
          <CardColumns>
            {zomato.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.id}
                  name={restaurant.name}
                  rating={restaurant.rating}
                  menu={restaurant.menu}
                  className="restaurant-card"
                />
              );
            })}
          </CardColumns>
        </div>
      </div>
    </div>
  );
};

export default Zomato;
