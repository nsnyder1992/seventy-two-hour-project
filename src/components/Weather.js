import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import "./Weather.css";

const Weather = ({ latitude, longitude }) => {
  const [degF, setDegF] = useState(true);
  const [temp, setTemp] = useState();

  const apiKey = "a7cd2e3688791a2c9585ba22bcbad0d5";

  const fetchWether = () => {
    if (latitude !== undefined && longitude !== undefined) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json.main.temp);
          setTemp(json.main.temp);
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
    <div className="weather-body">
      <Container>
        <Row>
          <h1>Weather</h1>
        </Row>
        <Row>
          <p>
            {Math.floor(temp * 100) / 100}
            {degF ? "deg F" : "deg C"}
          </p>
        </Row>
        <Row>
          <button onClick={changeDeg}>Change to deg {!degF ? "F" : "C"}</button>
        </Row>
      </Container>
    </div>
  );
};

export default Weather;
