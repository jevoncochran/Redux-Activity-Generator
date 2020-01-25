import { 
    GET_RANDOM_ACTIVITY_START, 
    GET_RANDOM_ACTIVITY_SUCCESS, 
    TOGGLE_TYPE_MODE,
    TURN_PARTICIPANT_NUM_MODE_ON 
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
                isFetching: true
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
                typeMode: true
            }
        case TURN_PARTICIPANT_NUM_MODE_ON:
            return {
                ...state,
                participantNumMode: true
            }
        default:
            return state;
    } 
}