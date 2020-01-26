import { 
    GET_RANDOM_ACTIVITY_START, 
    GET_RANDOM_ACTIVITY_SUCCESS, 
    TOGGLE_TYPE_MODE,
    TURN_PARTICIPANT_NUM_MODE_ON,
    GET_ACTIVITY_BY_TYPE_START,
    GET_ACTIVITY_BY_TYPE_SUCCESS 
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
        case TOGGLE_TYPE_MODE:
            return {
                ...state,
                typeMode: true,
                participantNumMode: false
            }
        case TURN_PARTICIPANT_NUM_MODE_ON:
            return {
                ...state,
                participantNumMode: true,
                typeMode: false
            }
        case GET_ACTIVITY_BY_TYPE_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_ACTIVITY_BY_TYPE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                activity: action.payload
            }
        default:
            return state;
    } 
}