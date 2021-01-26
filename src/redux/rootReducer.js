import {FETCH_CITY, FETCH_UNIT, GET_RESPONSE} from "./actionType";

const initialState = {
    cities: ['Moscow', 'St. Petersburg', 'Vladivostok', 'Krasnodar', 'Rostov-on-Don', 'Sochi'],
    units: {
        currentUnit : 'F',
        F: {unit: 'imperial', temp: 'F', speed: 'мили/час'},
        C: {unit: 'metric', temp: 'C', speed: 'метры/сек'}

    },
    fetchString: {
      url: 'https://api.openweathermap.org/data/2.5/weather',
      city: 'Moscow',
      key: '66d135a90a5cfc41872d402aac226205',
    },

    response : {"coord":{"lon":'',"lat":''},"weather":[{"id":'',"main":"","description":"","icon":"01n"}],"base":"","main":{"temp":"","feels_like":"","temp_min":"","temp_max":"","pressure":"","humidity":""},"visibility":"","wind":{"speed":"","deg":""},"clouds":{"all":""},"dt":"","sys":{"type":"","id":"","country":"","sunrise":"","sunset":""},"timezone":"","id":"","name":"","cod":""}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITY:
            return {...state, fetchString: {...state.fetchString, city: action.payload}}
        case FETCH_UNIT:
            return {...state, units: {...state.units, currentUnit: action.payload}}
        case GET_RESPONSE:
            return {...state, response: action.payload}
        default: return state
    }
}