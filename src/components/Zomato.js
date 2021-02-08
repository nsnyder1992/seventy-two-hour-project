
import React, { useEffect, useState } from 'react';
import "./Zomato.css";

const Zomato = () => {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const geo = () => {
        navigator.geolocation.getCurrentPosition(geoSuccess);
    };
    const geoSuccess = (pos) => {
        console.log("Your current position is:");
        console.log(`Latitude : ${pos.coords.latitude}`);
        console.log(`Longitude: ${pos.coords.longitude}`);
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
    };


    geo();
    const [data, setData] = useState([]);
    let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`;

    const initData = async () => {
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Key": "f0b8f4f1370b6c9eb8cc12e061b6c06f"
            }
        });
        const restaurant = await response.json();
        setData(restaurant.nearby_restaurants);

    };
    useEffect(() => {
        initData();
    }, [url]);
    console.log(data);

    return (
        <div className="zom-body">
            <h1>Restaurants Near You!</h1>
            <div className="restaurant-card">
                <ul>
                    <li>{data.length > 0 ?
                        (data[0].restaurant.name) :
                        (<></>)
                    }</li>
                </ul>
            </div>
        </div>
    );


};
export default Zomato;