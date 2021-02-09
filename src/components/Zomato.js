import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "./Zomato.css";

const Zomato = ({ latitude, longitude }) => {
  const styles = {
    card: {
      minWidth: "300px",
      maxWidth: "400px",
    },
  };

  const [data, setData] = useState([]);
  let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;

  const initData = async () => {
    if (latitude !== undefined && longitude !== undefined) {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "User-Key": "f0b8f4f1370b6c9eb8cc12e061b6c06f",
        },
      });
      const restaurant = await response.json();
      setData(restaurant.nearby_restaurants);
    }
  };
  useEffect(() => {
    initData();
  }, [url]);
  console.log(data);

  return (
    <div className="main">
      <div className="restaurant-card">
        <Card style={styles.card}>
          <CardHeader tag="h1">Restaurants Near You!</CardHeader>
          <CardBody>
            <ul>
              <li>{data.length > 0 ? data[0].restaurant.name : <></>}</li>
              <li>{data.length > 1 ? data[1].restaurant.name : <></>}</li>
              <li>{data.length > 2 ? data[2].restaurant.name : <></>}</li>
              <li>{data.length > 3 ? data[3].restaurant.name : <></>}</li>
              <li>{data.length > 4 ? data[4].restaurant.name : <></>}</li>
              <li>{data.length > 5 ? data[5].restaurant.name : <></>}</li>
              <li>{data.length > 6 ? data[6].restaurant.name : <></>}</li>
              <li>{data.length > 7 ? data[7].restaurant.name : <></>}</li>
              <li>{data.length > 8 ? data[8].restaurant.name : <></>}</li>
              <li>{data.length > 9 ? data[9].restaurant.name : <></>}</li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
export default Zomato;
