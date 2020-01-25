import React from "react";
import { connect } from "react-redux";

import { getRandom, toggleTypeMode } from "../actions";

const Criteria = props => {
    
    return (
        <div>
            <h3>Select your activity by:</h3>
            <ul>
                <li onClick={props.getRandom}>Random</li>
                <li onClick={props.toggleTypeMode}>Type</li>
                <li>Number of Participants</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        typeMode: state.typeMode
    }
}

export default connect(mapStateToProps, { getRandom, toggleTypeMode })(Criteria);