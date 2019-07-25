import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { WeatherParamsList, WeatherMainParams, WeatherCityInput, WeatherLoader, WeatherError } from './components';
import { loadWeatherData, onCityChange, onCitySubmit } from './logic'

const MainPage = () => {

    const dispatch = useDispatch();
    const { actual_weather, imBusy, error, city } = useSelector(state => state.Main, shallowEqual);

    // init loading data
    useEffect(() => {
        loadWeatherData(dispatch)
    }, [])

    if (imBusy) {
        return (
            <WeatherLoader />
        )
    }
    else {
        if (error) {
            return (
                <>
                    <WeatherCityInput
                        onSubmit={onCitySubmit(dispatch)}
                        onChange={onCityChange(dispatch)}
                        city={city}
                    />
                    <WeatherError {...error} />
                </>
            )
        }
        else {
            return (
                <>
                    <WeatherCityInput
                        onSubmit={onCitySubmit(dispatch)}
                        onChange={onCityChange(dispatch)}
                        city={city}
                    />
                    <WeatherMainParams {...actual_weather} />
                    <WeatherParamsList {...actual_weather} />
                </>
            )
        }
    }

}

export default MainPage