import axios from "axios";

export const TURN_TYPE_MODE_ON = 'TURN_TYPE_MODE_ON';
export const GET_ACTIVITY_BY_TYPE_START = 'GET_ACTIVITY_BY_TYPE_START';
export const GET_ACTIVITY_BY_TYPE_SUCCESS = 'GET_ACTIVITY_BY_TYPE_SUCCESS';

// sets typeMode to true which causes activity type options to render
export const toggleTypeMode = () => dispatch => {
    dispatch({ type: TURN_TYPE_MODE_ON })
}

// makes API call to get random activity limited to type selected
export const getActivityByType = newType => dispatch => {
    dispatch({ type: GET_ACTIVITY_BY_TYPE_START })
    axios.get(`http://www.boredapi.com/api/activity?type=${newType}`)
    .then(res => {
        // console.log(res);
        dispatch({ type: GET_ACTIVITY_BY_TYPE_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}