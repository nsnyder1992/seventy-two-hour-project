import { useState, useEffect } from "react";

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
    <div className="nasa-body main">
      <div className="mainDiv">
        <h1>NASA Satellite Image</h1>

        {longitude && latitude && url ? (
          <img src={url} style={{ minWidth: 250, maxWidth: 350 }} />
        ) : (
          <h6>Image pending...</h6>
        )}
      </div>
    </div>
  );
};

export default NASA;
