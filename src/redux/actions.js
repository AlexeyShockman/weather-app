import {FETCH_CITY, FETCH_UNIT, GET_RESPONSE} from "./actionType";


export function getResponse(url, city, key, units) {

    return async dispatch => {
        const response = await fetch(`${url}?q=${city}&appid=${key}&lang=RU&units=${units}`)
        const json = await response.json()
        dispatch({type: GET_RESPONSE, payload: json})

    }
}

export function changeCity(city) {
    return dispatch => {
        dispatch({type: FETCH_CITY, payload: city})
    }
}

export function changeUnit(unit) {
    return dispatch => {
        dispatch({type: FETCH_UNIT, payload: unit})
    }

}

