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
        <div className="type-activity-grid">
            <h3 className="type-activity-header">Please select an activity type:</h3>
                {/* creates <li> for each activity type, giving each one an onClick to make API call based on selection */}
                {activityArr.map(category => (
                    <p className="type-categories" key={category} onClick={e => returnActivity(category)}>{category}</p>
                ))}
        </div>
    )
}

export default connect(null, { getActivityByType })(TypeMenu);