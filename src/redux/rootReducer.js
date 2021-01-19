import {FETCH_CITY} from "./actionType";

const initialState = {
    cities: ['Moscow', 'St. Petersburg', 'Vladivostok', 'Krasnodar', 'Rostov-on-Don', 'Sochi'],
    units: {
        currentUnit : 'C',
        F: {unit: 'imperial', temp: 'F', speed: 'мили/час'},
        C: {unit: 'metric', temp: 'C', speed: 'метры/сек'}

    },

    response : {"coord":{"lon":'',"lat":''},"weather":[{"id":'',"main":"","description":"","icon":"01n"}],"base":"","main":{"temp":"","feels_like":"","temp_min":"","temp_max":"","pressure":"","humidity":""},"visibility":"","wind":{"speed":"","deg":""},"clouds":{"all":""},"dt":"","sys":{"type":"","id":"","country":"","sunrise":"","sunset":""},"timezone":"","id":"","name":"","cod":""}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITY:
            return {...state, response: action.payload}
        default: return state
    }
}