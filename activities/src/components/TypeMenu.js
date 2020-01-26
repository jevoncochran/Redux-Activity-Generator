import React from "react";
import { connect } from "react-redux";

import { getActivityByType } from "../actions";

const TypeMenu = props => {

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

    const returnActivity = t => {
        props.getActivityByType(t.toLowerCase());
    }

    return (
        <div>
            <h2>Please select an activity type:</h2>
            <ul>
                {activityArr.map(category => (
                    <li key={category} onClick={e => returnActivity(category)}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(null, { getActivityByType })(TypeMenu);