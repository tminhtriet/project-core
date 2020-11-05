import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import MainAppView from "../../views/MainAppView";

const mapStateToProps = (state) => {
    return {
        userLoginReducer: state.userLoginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(
    mapDispatchToProps,
    mapStateToProps
)(MainAppView)