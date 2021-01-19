import React from 'react';
import {useSelector} from "react-redux";

function Temp() {
    const mainTemp = useSelector(state => state.response);
    return (

        <div className="temp">{mainTemp.main.temp === "" ? 'необходимо выбрать город' : (mainTemp.main.temp + ' C')}</div>
)

}

export default Temp;