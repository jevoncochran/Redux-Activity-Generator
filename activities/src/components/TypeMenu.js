import React, { useState } from "react";
import { connect } from "react-redux";

import { getActivityByType } from "../actions";

const TypeMenu = props => {
    const [activityType, setActivityType] = useState('');

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

    const returnActivity = (e) => {
        setActivityType(e.target.textContent.toLowerCase());
        console.log(e.target.textContent.toLowerCase());
        console.log(activityType)
        props.getActivityByType(activityType);
    }

    return (
        <div>
            <h2>Please select an activity type:</h2>
            <ul>
                {activityArr.map(type => (
                    <li key={type} onClick={event => returnActivity(event)}>{type}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(null, { getActivityByType })(TypeMenu);