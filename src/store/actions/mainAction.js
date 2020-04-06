import {ERROR, FETCH_ALL_INFORMATION, FETCH_INFORMATION, SET_LOADING} from './actionTypes';
import Axios from "axios";

export function fetchInfo(url) {
    return async dispatch => {
        dispatch(setLoading(true));
        Axios({
            method: 'get',
            url: url,
            headers: {
                'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
                'x-rapidapi-key': 'f3aea6907amsh1db9d79c5c24ee1p1899c9jsn01688ef0ddce'
            }
        })
            .then(response => {
                if(!!response.data.countries_stat) {
                    dispatch(getInformationAboutAll(response.data.countries_stat))
                } else {
                    dispatch(getInformation(response.data))
                }
                dispatch(setLoading(false));
            })
            .catch(e => {
                dispatch(error(e))
                dispatch(setLoading(false));
            })
    }
}

function getInformationAboutAll(info) {
    return {
        type: FETCH_ALL_INFORMATION,
        info
    }
}

function setLoading(bool) {
    return {
        type: SET_LOADING,
        bool
    }
}

function getInformation(info) {
    return {
        type: FETCH_INFORMATION,
        info
    }
}

function error(e) {
    return {
        type: ERROR,
        e
    }

}