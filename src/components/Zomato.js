import React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import App from './../App';
import './Zomato.css';



const Zomato = ({ props }) => {

    // const baseUrl = `https://developers.zomato.com/api/v2.1/geocode`;
    // const key = 'f0b8f4f1370b6c9eb8cc12e061b6c06f';

    const [cords, setCords] = useState();
    const geo = () => {
        navigator.geolocation.getCurrentPosition(geoSuccess);
    };
    const geoSuccess = (pos) => {
        // const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${pos.coords.latitude}`);
        console.log(`Longitude: ${pos.coords.longitude}`);
        setCords(pos.cords);
    };
    useEffect(() => {
        geo();
    }, []);

    const fetchResults = () => {
        const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${setCords.latitude}&lon=${setCords.longitude}`;
        console.log(url);
        const response = fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Key": "f0b8f4f1370b6c9eb8cc12e061b6c06f"
            }
                .then(res => res.json())
                .then((data) => {
                    this.setState({ 'zomato': data })
                })
                .catch(console.log)
        });

    };



    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };

    return (
        <div>
            <h1>Restaurants near you!</h1>
            <div className="restaurant-card">

                <p>{ }</p>

            </div>

        </div>
    );
};

export default Zomato;
