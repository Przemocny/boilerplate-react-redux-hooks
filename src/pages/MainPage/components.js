import React from 'react';

const CelciusSymbol = () => {
    return (<span>&#8451;</span>)
}

const WeatherLoader = () => {
    return (<div>LOADING</div>)
}

const WeatherError = ({ message = 'Unknown Error' }) => {
    return (
        <div>ERROR: {message}</div>
    )
}

const WeatherMainParams = ({
    city, main, description, country, temp, time
}) => {
    return (
        <div>
            <ul>
                <li>City: {city}, {country}</li>
                <li>Actual temperature: {temp}<CelciusSymbol /></li>
                <li>Actual time: {time}</li>
                <li>Description: {main}, {description}</li>
            </ul>
        </div>
    )
}

const WeatherParamsList = ({
    temp_max, temp_min, clouds, humidity, wind, pressure, sunrise, sunset
}) => {
    return (
        <div>
            <ul>
                <li>Max temperature: {temp_max}<CelciusSymbol /></li>
                <li>Min temperature: {temp_min}<CelciusSymbol /></li>
                <li>Pressure: {pressure}</li>
                <li>Clouds: {clouds}</li>
                <li>Humidity: {humidity}</li>
                <li>Wind speed: {wind}</li>
                <li>The Sun rises at {sunrise}</li>
                <li>The Sun goes down at {sunset}</li>
            </ul>
        </div>
    )
}

const WeatherCityInput = ({
    onSubmit, city, onChange
}) => {
    return (
        <div className='mt-3 mb-3'>
            <form>
                <div className="form-group">
                    <input type='text'
                        value={city}
                        placeholder='City'
                        className="form-control"
                        onChange={(e) => {
                            onChange(e.target.value)
                        }} />
                </div>
                <div className="form-group">
                    <button className="btn btn-block btn-primary" onClick={(e) => {
                        e.preventDefault()
                        onSubmit(city)
                    }}>Check weather for city</button>
                </div>
            </form>
        </div>
    )
}


export {
    WeatherMainParams,
    WeatherParamsList,
    WeatherCityInput,
    WeatherLoader,
    WeatherError
}