import React from "react";
import { connect } from "react-redux";

const Activity = props => {

    return (
        <div>
            <h3>Here is your suggested activity:</h3>
            <h4>{props.activity.activity}</h4>
            <p>type: {props.activity.type}</p>
            <p>participants: {props.activity.participants}</p>
            <p>price: {props.activity.price}</p>
            <p>accessibility: {props.activity.accessibility}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        activity: state.activity,
        error: state.error
    }
}

export default connect(mapStateToProps, null)(Activity);