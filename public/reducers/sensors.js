import {TEMPERATURE_CHANGED} from '../actions/temperatureActions';

export function sensors(state = {}, action) {
    let result = Object.assign({}, state);
    switch (action.type) {
        case TEMPERATURE_CHANGED: {
            result.temperature = action.temperature;
            return result;
        }
    }
    return state;
}