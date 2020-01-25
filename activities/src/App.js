import React from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';

import Criteria from "./components/Criteria";
import Activity from "./components/Activity";
import TypeMenu from "./components/TypeMenu";
import NumberOfParticipants from "./components/NumberOfParticipants";

function App(props) {
  return (
    <div className="App">

      {/* initial screen shows Criteria component */}
      <Criteria />

      {/* conditionally renders Activity component */}
      {!props.isFetching && props.activity && !props.error && <Activity />}

      {/* conditionally renders TypeMenu component */}
      {!props.isFetching && !props.activity && props.typeMode && !props.error && <TypeMenu />}

      {!props.isFetching && !props.activity && props.participantNumMode && !props.error && <NumberOfParticipants />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    activity: state.activity,
    typeMode: state.typeMode,
    participantNumMode: state.participantNumMode,
    error: state.error
  }
}

export default connect (mapStateToProps, null)(App);
