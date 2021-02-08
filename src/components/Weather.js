import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
} from "reactstrap";
import "./Weather.css";

const Weather = ({ latitude, longitude }) => {
  const [degF, setDegF] = useState(true);
  const [temp, setTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [icon, setIcon] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();

  const styles = {
    card: {
      minWidth: "150px",
      maxWidth: "250px",
    },
    img: {
      margin: "auto",
      marginTop: "5px",
      marginBottom: "5px",
      maxWidth: "150px",
      maxHeight: "150px",
    },
  };

  const apiKey = "a7cd2e3688791a2c9585ba22bcbad0d5";

  const fetchWether = () => {
    if (latitude !== undefined && longitude !== undefined) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setTemp(json.main.temp);
          setHumidity(json.main.humidity);
          setIcon(
            "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
          );
          setLocation(json.name);
          setDescription(json.weather[0].description);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetchWether();
  }, [latitude, longitude]);

  const changeDeg = () => {
    if (degF) {
      setTemp((temp - 32) * (5 / 9));
    } else {
      setTemp(temp * (9 / 5) + 32);
    }
    setDegF(!degF);
  };

  return (
    <div className="main">
      <div className="weather-body mainDiv">
        <Card style={styles.card}>
          <CardTitle tag="h1">{location}</CardTitle>
          <CardSubtitle tag="h5" className="text-muted">
            {description}
          </CardSubtitle>
          <img
            className="img-thumbnail rounded"
            style={styles.img}
            src={icon}
            alt="..."
          />
          <CardBody>
            <CardText tag="h6">Humidity: {humidity}%</CardText>
            <CardText tag="h4">
              Temp: {Math.floor(temp * 100) / 100}&deg;
              {degF ? "F" : "C"}
            </CardText>

            <Button onClick={changeDeg}>
              Change to &deg;
              {!degF ? "F" : "C"}
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Weather;
