import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeUnit} from "../redux/actions";

function Temp() {
    const mainTemp = useSelector(state => state.response);
    const units = useSelector(state => state.units[state.units.currentUnit]);
    const dispatch = useDispatch();
    return (

        <div
            className="temp"
            onClick={() => dispatch(changeUnit(units.temp === 'C' ? 'F' : 'C'))}
        >{mainTemp.main.temp === '' ? 'необходимо выбрать город' : (mainTemp.main.temp + ' ' + units.temp)}</div>
)

}

export default Temp;