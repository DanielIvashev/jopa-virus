import {ERROR, FETCH_ALL_INFORMATION, FETCH_INFORMATION, SET_LOADING} from "../actions/actionTypes";

const initialState = {
    info: [],
    loading: false,
    error: '',
    allInfo: []
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state, loading: action.bool
            };
        case FETCH_INFORMATION:
            return {
                ...state, info: action.info
            };
        case ERROR:
            return {
                ...state, error: action.e
            };
        case FETCH_ALL_INFORMATION:
            return {
                ...state, allInfo: action.info
            };
        default:
            return state
    }
}