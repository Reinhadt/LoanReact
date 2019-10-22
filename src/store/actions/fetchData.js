import * as actionTypes from './actionTypes'
import axios from 'axios'

export const setReviews = (datos) => {
    return {
        type: actionTypes.SET_REVIEWS,
        slider: datos
    }
}

export const setCalcData = (datos) => {
    return {
        type: actionTypes.CALC_DATA,
        calculator: datos
    }
}

export const setGlobalData = (datos) => {
    return {
        type: actionTypes.GLOBAL_DATA,
        menu: datos
    }
}

export const fetchFailed = () => {
    return{
        type: actionTypes.FETCH_FAILED,
    }
}

export const initData = (end) => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_BASE_URL}${end}.json`)
            .then( response => {
                if(end == process.env.REACT_APP_HOME_ENDPOINT){
                    dispatch(setReviews(response.data.slider))
                }
                if(end == process.env.REACT_APP_CALC_ENDPOINT){
                    dispatch(setCalcData(response.data.calculator))
                }
                if(end == process.env.REACT_APP_GLOBALDATA_ENDPOINT){
                    dispatch(setGlobalData(response.data.menu.items))
                }
            })
            .catch(error => {
                dispatch(fetchFailed())
            })
    }
}