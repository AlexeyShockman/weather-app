import React from 'react';
import {useSelector} from "react-redux";

function TextParams() {
    const response = useSelector(state => state.response);
    const sunrise = new Date(response.sys.sunrise*1000);
    const sunset = new Date(response.sys.sunset*1000);
    const units = useSelector(state => state.units[state.units.currentUnit]);
    // const currentUnit = units.currentUnit;


    return (
        <div className="text-params">
            <div className="params">
                <div>ощущается как</div>
                <div>{response.main.feels_like} {units.temp}</div>
            </div>
            <div className="params">
                <div>скорость ветра ({units.speed})</div>
                <div>{response.wind.speed}</div>
            </div>
            <div className="params">
                <div>расссвет</div>
                <div>{response.sys.sunrise !== '' ? sunrise.toLocaleTimeString() : ''}</div>
            </div>
            <div className="params">
                <div>закат</div>
                <div>{response.sys.sunset !== '' ? sunset.toLocaleTimeString() : ''}</div>
            </div>
            <div className="params">
                <div>давление (гПа)</div>
                <div>{response.main.pressure}</div>
            </div>
            <div>
                <div>облачность (%)</div>
                <div>{response.clouds.all}</div>
            </div>


        </div>
    )
}

export default TextParams;