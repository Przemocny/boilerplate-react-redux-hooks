import React from 'react';

const CelciusSymbol = () => {
    return (<span>&#8451;</span>)
}

const WeatherLoader = () => {
    return (<div className='weather-loading'>LOADING</div>)
}

const WeatherError = ({ message = 'Unknown Error' }) => {
    return (
        <div className='weather-error'>
        <h4>ERROR: <strong>{message}</strong></h4></div>
    )
}

const WeatherParamsList = ({
    temp_max, temp_min, clouds, humidity, wind, pressure
}) => {
    return (
        <div className='weather-secondary-params mt-3'>
            <div className='row m-0'>
                <div className='col-md m-0 mt-3 pb-3'>
                    <h6>Min temperature: <strong>{temp_min}<CelciusSymbol /></strong></h6>
                    <h6>Max temperature: <strong>{temp_max}<CelciusSymbol /></strong></h6>
                </div>
                <div className='col-md m-0 mt-3 pb-3'>
                    <h6>Pressure: <strong>{pressure}</strong></h6>
                    <h6>Wind speed: <strong>{wind}</strong></h6>
                </div>
                <div className='col-md m-0 mt-3 pb-3'>
                    <h6>Clouds: <strong>{clouds}</strong></h6>
                    <h6>Humidity: <strong>{humidity}</strong></h6>
                </div>
            </div>

        </div>
    )
}

const WeatherCityInput = ({
    onSubmit, city, onChange
}) => {
    return (
        <div className='weather-form'>
            <form className='row'>
                <div className="form-group col-md">
                    <input type='text'
                        value={city}
                        placeholder='City'
                        className="form-control"
                        onChange={(e) => {
                            onChange(e.target.value)
                        }} />
                </div>
                <div className="form-group col-md">
                    <button className="btn btn-block btn-primary" onClick={(e) => {
                        e.preventDefault()
                        onSubmit(city)
                    }}>Check weather</button>
                </div>
            </form>
        </div>
    )
}

const WeatherMain = ({ icon = '01d', main, temp, city, country, time }) => {

    const urlToIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <div className='weather-main'>
            <img src={urlToIcon}  alt='weather icon'/>
            <h6><small>{time} <strong>{city}, {country}</strong></small></h6>
            <h3><strong>{temp}<CelciusSymbol /> / {main}</strong></h3>
        </div>
    )
}


export {
    WeatherParamsList,
    WeatherCityInput,
    WeatherLoader,
    WeatherError,
    WeatherMain
}