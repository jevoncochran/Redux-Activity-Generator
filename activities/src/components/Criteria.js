import React from "react";
import { connect } from "react-redux";

import { getRandom, toggleTypeMode, turnParticipantNumModeOn } from "../actions";

const Criteria = props => {
    
    return (
        <div className="criteria-grid">
            <h3 className="criteria-header">Select your activity by:</h3>


            {/* clicking below makes API call to get random activity */}
            <p className="criteria-1" onClick={props.getRandom}>Random</p>

            {/* clicking here turns typeMode on, causing TypeMenu component to render */}
            <p className="criteria-2" onClick={props.toggleTypeMode}>Type</p>

            {/* click here turns participantNumMode, causing NumberofParticipants to render */}
            <p className="criteria-3" onClick={props.turnParticipantNumModeOn}>Number of Participants</p>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        typeMode: state.typeMode
    }
}

export default connect(mapStateToProps, { getRandom, toggleTypeMode, turnParticipantNumModeOn })(Criteria);