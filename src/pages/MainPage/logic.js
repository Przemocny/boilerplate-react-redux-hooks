import moment from 'moment';
import { api } from '../../api/weather.api'
import {
    initLoadingData,
    actualWeatherFetchedWithSuccess,
    actualWeatherFetchedWithError,
    changeCity
} from './store'


const preprocessActualWeatherResponse = (data) => {
    const preprocessed = {
        'city': data.name,
        'clouds': data.clouds.all,
        'wind': data.wind.speed,
        'time': data.dt,
        ...data.coord,
        ...data.main,
        ...data.weather[0],
        ...data.sys,
        ...data.timezone
    }

    // drop unnecessary props
    delete preprocessed['type']
    delete preprocessed['id']
    delete preprocessed['message']
    delete preprocessed['icon']

    // convert to moment dt
    preprocessed['time'] = moment(preprocessed['time'], 'X').utc().local().format('HH:mm DD.MM.YYYY')
    preprocessed['sunrise'] = moment(preprocessed['sunrise'], 'X').utc().local().format('HH:mm')
    preprocessed['sunset'] = moment(preprocessed['sunset'], 'X').utc().local().format('HH:mm')

    // adding units
    preprocessed['pressure'] += 'hPa'
    preprocessed['humidity'] += '%'
    preprocessed['clouds'] += '%'
    preprocessed['wind'] += 'm/s'

    return preprocessed
}

const loadWeatherData = (dispatch, city = null) => {
    dispatch(initLoadingData())

    let prom = city ? api.actualWeatherForCityName(city) : api.actualWeatherForCityName()

    return prom.then((data) => {
        const preprocessedData = preprocessActualWeatherResponse(data)
        dispatch(actualWeatherFetchedWithSuccess(preprocessedData))
    })
        .catch(({ response }) => {
            const { data } = response
            dispatch(actualWeatherFetchedWithError(data))
        })
}


const onCitySubmit = (dispatch) => (val) => {
    loadWeatherData(dispatch, val)
}

const onCityChange = (dispatch) => (city) => {
    dispatch(changeCity(city))
}

export {
    loadWeatherData, onCitySubmit, onCityChange
}