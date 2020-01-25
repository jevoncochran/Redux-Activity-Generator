import { GET_RANDOM_ACTIVITY_START, GET_RANDOM_ACTIVITY_SUCCESS } from "../actions";

const initialState = {
    isFetching: false,
    activity: null,
    typeMode: false,
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
                activitySelected: true
            }
        default:
            return state;
    } 
}