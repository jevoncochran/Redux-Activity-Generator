import React from "react";
import { connect } from "react-redux";

import { getActivityByType } from "../actions";

const TypeMenu = props => {

    // array that holds text used to create <li> elements in return: activity type selection
    const activityArr = [
        'Education',
        'Recreational',
        'Social',
        'DIY',
        'Charity',
        'Cooking',
        'Relaxation',
        'Music',
        'Busywork'
    ];

    // onClick fn that dispatces action to make API call
    const returnActivity = t => {
        props.getActivityByType(t.toLowerCase());
    }

    return (
        <div>
            <h2>Please select an activity type:</h2>
            <ul>
                {/* creates <li> for each activity type, giving each one an onClick to make API call based on selection */}
                {activityArr.map(category => (
                    <li key={category} onClick={e => returnActivity(category)}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(null, { getActivityByType })(TypeMenu);