import React from "react";
import { connect } from "react-redux";

import { getRandom } from "../actions";

const Criteria = props => {
    
    return (
        <div>
            <h3>Select your activity by:</h3>
            <ul>
                <li onClick={props.getRandom}>Random</li>
                <li>Type</li>
                <li>Number of Participants</li>
            </ul>
        </div>
    )
}

export default connect(null, { getRandom })(Criteria);