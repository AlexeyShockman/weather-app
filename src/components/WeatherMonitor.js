import React from 'react';
import City from "./City";
import Temp from "./Temp";
import WeatherIcon from "./WeatherIcon";
import TextParams from "./TextParams";

function WeatherMonitor() {



    return (
        <div className="weather-monitor">
            <City />
            <Temp />
            <WeatherIcon />
            <TextParams />
        </div>
    )
}

export default WeatherMonitor;