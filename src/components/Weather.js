import { useState, useEffect } from "react";

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
    <div>
      <h1>Weather</h1>
      <p>
        {Math.floor(temp * 100) / 100} {degF ? "deg F" : "deg C"}
      </p>
      <button onClick={changeDeg}>Change to deg {!degF ? "F" : "C"}</button>
    </div>
  );
};

export default Weather;
