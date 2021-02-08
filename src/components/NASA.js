import { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import "./NASA.css";

const NASA = ({ latitude, longitude }) => {
  //states
  const [url, setUrl] = useState();

  //api constants
  const apiKey = "Feg2He9MO8QQwfv727oLBFgBGw1x2FtciQWPWY68";
  const date = "2015-01-01";
  const dim = 0.05;

  //set api url when latitude or longitude
  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      setUrl(
        `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${date}&dim=${dim}&api_key=${apiKey}`
      );
    }
  }, [latitude, longitude]);

  return (
    <div className="nasa-body">
      <Container>
        <Row className="text-center">
          <h1 className="text-center">NASA Satellite Image</h1>
        </Row>
        <Row>
          <h3>
            {"Coordinates: Longitude=" + longitude + " Latitude=" + latitude}
          </h3>
        </Row>
        <Row>
          {longitude && latitude && url ? (
            <img src={url} style={{ minWidth: 250, maxWidth: 350 }} />
          ) : (
            <h6>Image pending...</h6>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default NASA;
