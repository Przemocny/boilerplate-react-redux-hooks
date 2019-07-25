import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { WeatherParamsList, WeatherCityInput, WeatherLoader, WeatherError, WeatherMain } from './components';
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
            <div className='weather-container'>
                <WeatherLoader />
            </div>
        )
    }
    else {
        if (error) {
            return (
                <div className='weather-container'>
                    <WeatherCityInput
                        onSubmit={onCitySubmit(dispatch)}
                        onChange={onCityChange(dispatch)}
                        city={city}
                    />
                    <WeatherError {...error} />
                </div>
            )
        }
        else {
            return (
                <div className='weather-container'>
                    <WeatherCityInput
                        onSubmit={onCitySubmit(dispatch)}
                        onChange={onCityChange(dispatch)}
                        city={city}
                    />
                    <div className='row'>
                        <div className='col-md'>
                            <WeatherMain {...actual_weather} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <WeatherParamsList {...actual_weather} />
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default MainPage