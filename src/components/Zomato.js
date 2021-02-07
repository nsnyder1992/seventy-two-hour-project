import React from 'react';
import { geolocated } from 'react-geolocated';
import { useEffect, useState } from 'react';

if (!navigator.geolocation) {
    console.error(`Your browser doesn't support Geolocation`);
} else {
    console.log('Good to go!');
};

const location = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
};

const onSuccess = () => {
    const {
        latitude,
        longitude
    } = location.coords;
    console.log(`Your location: (${location.coords.latitude},${location.coords.longitude})`);
};

const onError = () => {
    console.log('Failed to get location');
};

const Zomato = () => {
    //     const url = `https://developers.zomato.com/api/v2.1/geocode?lat=${position.latitude}&lon=${position.longitude}`;
    //     const key = 'f0b8f4f1370b6c9eb8cc12e061b6c06f';

    const location = () => {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };

    const onSuccess = () => {
        const {
            latitude,
            longitude
        } = location.coords;
        console.log(`Your location: (${location.coords.latitude},${location.coords.longitude})`);
    };

    const onError = () => {
        console.log('Failed to get location');
    };

    //     const componentDidMount = ({ position }) => {
    //         navigator.geolocation.getCurrentPosition(() => {
    //             const position = {
    //                 latitude,
    //                 longitude
    //             }
    //         });
    //     }


    //     const initData = async () => {
    //         const response = await fetch(url);
    //         const info = await response.json();

    //         initData(info);
    //     };

    //     useEffect(() => {
    //         initData();
    //     }, []);

    return (
        <div>
            <h1>Restaurants near you!</h1>

        </div>
    );
};

export default Zomato;
