export const TEMPERATURE_CHANGED = 'TEMPERATURE_CHANGED';

export function temperatureChanged(newValue) {
    return {
        type: TEMPERATURE_CHANGED,
        temperature: newValue
    }
}