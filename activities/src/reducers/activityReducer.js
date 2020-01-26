import { 
    GET_RANDOM_ACTIVITY_START, 
    GET_RANDOM_ACTIVITY_SUCCESS, 
    TURN_TYPE_MODE_ON,
    TURN_PARTICIPANT_NUM_MODE_ON,
    GET_ACTIVITY_BY_TYPE_START,
    GET_ACTIVITY_BY_TYPE_SUCCESS,
    GET_ACTIVITY_BY_PARTICIPANTS_START,
    GET_ACTIVITY_BY_PARTICIPANTS_SUCCESS 
} from "../actions";

const initialState = {
    isFetching: false,
    activity: null,
    typeMode: false,
    participantNumMode: false,
    error: ''
};

export const activityReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_RANDOM_ACTIVITY_START:
            return {
                ...state, 
                isFetching: true,
                typeMode: false,
                participantNumMode: false
            }
        case GET_RANDOM_ACTIVITY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                activity: action.payload,
            }
        case TURN_TYPE_MODE_ON:
            return {
                ...state,
                activity: false,
                typeMode: true,
                participantNumMode: false
            }
        case TURN_PARTICIPANT_NUM_MODE_ON:
            return {
                ...state,
                activity: false,
                participantNumMode: true,
                typeMode: false
            }
        case GET_ACTIVITY_BY_TYPE_START:
            return {
                ...state,
                isFetching: true,
                typeMode: false
            }
        case GET_ACTIVITY_BY_TYPE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                activity: action.payload
            }
        case GET_ACTIVITY_BY_PARTICIPANTS_START:
            return {
                ...state,
                isFetching: true,
                participantNumMode: false
            }
        case GET_ACTIVITY_BY_PARTICIPANTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                activity: action.payload
            }
        default:
            return state;
    } 
}