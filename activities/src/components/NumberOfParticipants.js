import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getActivityByParticipants } from "../actions";

const NumberOfParticipants = props => {
    const [howMany, setHowMany] = useState(null);

    const numArr = [1, 2, 3, 4, 5];

    const handleNumberChange = e => setHowMany(e.target.value);

    const returnActivity = e => {
        e.preventDefault();
        props.getActivityByParticipants(howMany);
    }

    // const returnActivity = (e) => {
    //     e.preventDefault();
    //     let selected = document.getElementById('opt').selectedIndex.value;
    //     setHowMany(selected);
    //     props.getActivityByParticipants(howMany);
    //     console.log('selected: ' + selected);
    // }

    // useEffect(() => {
    //     console.log('from useEffect: ' + howMany);
    // }, [howMany])

    // console.log(returnActivity);

    return (
        <form onSubmit={e => returnActivity(e)}>
            <select id="opt" onChange={handleNumberChange}>
                <option>How many participants</option>
               {numArr.map(n => (
                   <option key={n} value={n}>{n}</option>
               ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}

export default connect(null, { getActivityByParticipants })(NumberOfParticipants);

