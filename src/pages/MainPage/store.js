import {createSlice} from 'redux-starter-kit';
import { WEATHER_API_DEFAULT_CITY } from '../../common/globals'

const initial_state = {
    actual_weather: {},
    city: WEATHER_API_DEFAULT_CITY,
    error: false,
    imBusy: true
}

const {actions, reducer} = createSlice({
    slice : 'Main',
    initialState : initial_state,
    reducers : {
        initLoadingData(state, action) {
            state.imBusy = true
            state.error = false
            state.actual_weather = {}
        },
        actualWeatherFetchedWithSuccess(state, action) {
            state.imBusy = false
            state.error = false
            state.actual_weather = action.payload
        },
        actualWeatherFetchedWithError(state, action) {
            state.imBusy = false
            state.error = action.payload
        },
        changeCity(state, action) {
            state.city = action.payload
        },
    }
});

export const {
    initLoadingData,
    actualWeatherFetchedWithSuccess,
    actualWeatherFetchedWithError,
    changeCity
} = actions;

export default reducer;

