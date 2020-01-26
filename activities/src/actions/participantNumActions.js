import axios from "axios";

export const TURN_PARTICIPANT_NUM_MODE_ON = 'TURN_PARTICIPANT_NUM_MODE_ON';
export const GET_ACTIVITY_BY_PARTICIPANTS_START = 'GET_ACTIVITY_BY_PARTICIPANTS_START';
export const GET_ACTIVITY_BY_PARTICIPANTS_SUCCESS = 'GET_ACTIVITY_BY_PARTICIPANTS_SUCCESS';


export const turnParticipantNumModeOn = () => dispatch => {
    dispatch({ type: TURN_PARTICIPANT_NUM_MODE_ON })
}

export const getActivityByParticipants = num => dispatch => {
    dispatch({ type: GET_ACTIVITY_BY_PARTICIPANTS_START })
    axios.get(`http://www.boredapi.com/api/activity?participants=${num}`)
    .then(res => {
        console.log(res);
        dispatch({ type: GET_ACTIVITY_BY_PARTICIPANTS_SUCCESS, dispatch: res.data })
    })
    .catch(err => console.log(err))
}