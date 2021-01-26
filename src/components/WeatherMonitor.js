import React, {useEffect} from 'react';
import City from "./City";
import Temp from "./Temp";
import WeatherIcon from "./WeatherIcon";
import TextParams from "./TextParams";
import {getResponse} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";


function WeatherMonitor() {
    const dispatch = useDispatch();
    const fetchString = useSelector(state => state.fetchString);
    const units = useSelector(state => state.units[state.units.currentUnit].unit);

    useEffect(() => {
        dispatch(getResponse(fetchString.url, fetchString.city, fetchString.key, units));
    })

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