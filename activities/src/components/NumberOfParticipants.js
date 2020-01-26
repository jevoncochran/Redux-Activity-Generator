import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getActivityByParticipants } from "../actions";

const NumberOfParticipants = props => {
    const [howMany, setHowMany] = useState(null);

    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const returnActivity = (e) => {
        e.preventDefault();
        let selected = document.getElementById('opt').selectedIndex.value;
        setHowMany(selected);
        props.getActivityByParticipants(howMany);
        console.log('selected: ' + selected);
    }

    useEffect(() => {
        console.log('from useEffect: ' + howMany);
    }, [howMany])

    console.log(returnActivity);

    return (
        <form>
            <select id="opt">
                <option>How many participants</option>
               {numArr.map(n => (
                   <option key={n} value={n}>{n}</option>
               ))}
            </select>
            <button onSubmit={e => returnActivity(e)}>Submit</button>
        </form>
    )
}

export default connect(null, { getActivityByParticipants })(NumberOfParticipants);

