import React from 'react';
import {useSelector} from "react-redux";

function WeatherIcon() {
    const weatherIcon = useSelector(state => state.response.weather[0]);
    const iconLink = 'http://openweathermap.org/img/wn/' + weatherIcon.icon +'@2x.png'
    return (
        <div className="weather-logo">
            <img className="weather-icon"
                 src={iconLink}
                 alt="weather-logo"
            >
            </img>
            <div className='weather-icon-text'>
                {weatherIcon.description === "" ? 'ожидание выбора города' : weatherIcon.description}
            </div>
        </div>
    )
}

export default WeatherIcon;