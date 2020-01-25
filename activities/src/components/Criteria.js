import React from "react";
import { connect } from "react-redux";

import { getRandom, toggleTypeMode, turnParticipantNumModeOn } from "../actions";

const Criteria = props => {
    
    return (
        <div>
            <h3>Select your activity by:</h3>

            {/* unorder list of activity criteria selectors */}
            <ul>
                {/* clicking below makes API call to get random activity */}
                <li onClick={props.getRandom}>Random</li>
                {/* clicking here turns typeMode on which causes TypeMenu component to render */}
                <li onClick={props.toggleTypeMode}>Type</li>
                <li onClick={props.turnParticipantNumModeOn}>Number of Participants</li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        typeMode: state.typeMode
    }
}

export default connect(mapStateToProps, { getRandom, toggleTypeMode, turnParticipantNumModeOn })(Criteria);