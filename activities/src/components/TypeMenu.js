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

    const returnActivity = (t) => {
        props.getActivityByType(t.toLowerCase());
    }

    return (
        <div>
            <h2>Please select an activity type:</h2>
            <ul>
                {activityArr.map(type => (
                    <li key={type} onClick={e => returnActivity(type)}>{type}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(null, { getActivityByType })(TypeMenu);