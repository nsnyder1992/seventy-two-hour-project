import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import "./NASA.css";

const NASA = ({ latitude, longitude }) => {
  //states
  const [url, setUrl] = useState();

  const styles = {
    card: {
      minWidth: "300px",
      maxWidth: "400px",
    },
  };

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
    <div className="nasa-body main">
      <div className="nasa-card">
        <Card style={styles.card}>
          <CardHeader tag="h1">NASA Satellite Image</CardHeader>
          <CardBody>
            {longitude && latitude && url ? (
              <img src={url} style={{ minWidth: 250, maxWidth: 350 }} />
            ) : (
                <h6>Image pending...</h6>
              )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default NASA;
