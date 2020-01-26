import axios from "axios";

export const TOGGLE_TYPE_MODE = 'TOGGLE_TYPE_MODE';
export const GET_ACTIVITY_BY_TYPE_START = 'GET_ACTIVITY_BY_TYPE_START';
export const GET_ACTIVITY_BY_TYPE_SUCCESS = 'GET_ACTIVITY_BY_TYPE_SUCCESS';

export const toggleTypeMode = () => dispatch => {
    dispatch({ type: TOGGLE_TYPE_MODE })
}

export const getActivityByType = type => dispatch => {
    dispatch({ type: GET_ACTIVITY_BY_TYPE_START })
    axios.get(`http://www.boredapi.com/api/activity?type=${type}`)
    .then(res => {
        // console.log(res);
        dispatch({ type: GET_ACTIVITY_BY_TYPE_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}