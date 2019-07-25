import {
    api
} from './weather.api'

describe('weather api tests', () => {

    it('getting connection to weather api', () => {
        expect.assertions(1)

        const ping_api = api.actualWeatherForCityName()
        
        const expected_result = {
            'cod':200
        }

        return ping_api.then((data)=>{
            return expect(data).toMatchObject(expected_result)
        })
    });

    it('getting info about actual weather in default city', () => {
        expect.assertions(1)

        const actual_weather = api.actualWeatherForCityName()
        
        const expected_result = {
            'cod':200,
            'weather':expect.any(Array),
            'main':expect.any(Object),
        }

        return actual_weather.then((data)=>{
            return expect(data).toMatchObject(expected_result)
        })
    });

});