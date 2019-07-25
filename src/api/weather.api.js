import { request } from './request'
import { WEATHER_API_DEFAULT_PARAMS, WEATHER_API_DEFAULT_CITY } from '../common/globals'

class WeatherAPI {
    actualWeatherForCityName(city = WEATHER_API_DEFAULT_CITY) {
        const url = `/weather`

        const config = {
            method: 'GET',
            query: {
                ...WEATHER_API_DEFAULT_PARAMS,
                'q': city
            }
        }

        return request(url, config)
    }

}

const api = new WeatherAPI()

export {
  api
}