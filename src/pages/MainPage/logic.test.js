import { createStore } from 'redux'
import { loadWeatherData, onCityChange } from './logic'

import reducer, {
    initLoadingData
} from './store'


describe('main page logic tests', () => {

    let store, dispatch

    beforeEach(()=>{
        store = createStore(reducer)
        dispatch = store.dispatch
    })

    it('initial loading data from api to store', () => {
        dispatch(initLoadingData())
        const newState = store.getState()
        expect(newState.imBusy).toEqual(true)
    });

    it('load data from api to store with success', () => {
        expect.assertions(1)

        const expected_result = {
            'city':expect.any(String),
            'time':expect.any(String),
            'temp':expect.any(Number),
            'main':expect.any(String)
        }

        return loadWeatherData(dispatch).then(()=>{
            const newState = store.getState()
            return expect(newState.actual_weather).toMatchObject(expected_result)
        })
    });

    it('load data from api to store with error', () => {
        expect.assertions(1)

        const expected_result = {
            'message':expect.any(String)
        }

        return loadWeatherData(dispatch,'Nieistniejącemiasto').then(()=>{
            const newState = store.getState()
            return expect(newState.error).toMatchObject(expected_result)
        })
    });

    it('change city name in store', () => {

        const expected_result = 'NoweMiasto'

        onCityChange(dispatch)('NoweMiasto')

        const newState = store.getState()  
        expect(newState.city).toEqual(expected_result)
    });
});