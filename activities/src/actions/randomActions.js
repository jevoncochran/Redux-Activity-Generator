import axios from "axios";

export const GET_RANDOM_ACTIVITY_START = 'GET_RANDOM_ACTIVITY_START';
export const GET_RANDOM_ACTIVITY_SUCCESS = 'GET_RANDOM_ACTIVITY_SUCCESS';

// makes API call to get random activity independent of any other criteria
export const getRandom = () => dispatch => {
    dispatch({ type: GET_RANDOM_ACTIVITY_START })
    axios.get('http://www.boredapi.com/api/activity/')
    .then(res => {
        console.log(res);
        dispatch({ type: GET_RANDOM_ACTIVITY_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}