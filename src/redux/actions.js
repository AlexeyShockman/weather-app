import {FETCH_CITY} from "./actionType";

export function changeCity(e) {

    return async dispatch => {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + e.currentTarget.textContent + '&appid=66d135a90a5cfc41872d402aac226205&lang=RU&units=metric')
        const json = await response.json()
        dispatch({type: FETCH_CITY, payload: json})
    }
}

