import React from "react";
import {connect} from "react-redux";
import Buyers from "./Buyers";


let mapStateToProps = (state) => {
    return {
        buyersPage: state.buyersPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Buyers);