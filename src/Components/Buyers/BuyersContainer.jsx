import {connect} from "react-redux";
import Buyers from "./Buyers";
import {
    setInitialDataAC,
    sortByAverageCheckAC,
    sortByIdAC,
    sortByNameAC,
    sortByNumberPurchasesAC,
    sortByTotalProceedsAC
} from "../../Reducers/buyers-reducer";


let mapStateToProps = (state) => {
    return {
        buyersPage: state.buyersPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sortById: (toggle) => {
            dispatch(sortByIdAC(toggle));
        },
        sortByName: (toggle) => {
            dispatch(sortByNameAC(toggle));
        },
        sortByAverageCheck: (toggle) => {
            dispatch(sortByAverageCheckAC(toggle));
        },
        sortByNumberPurchases: (toggle) => {
            dispatch(sortByNumberPurchasesAC(toggle));
        },
        sortByTotalProceeds: (toggle) => {
            dispatch(sortByTotalProceedsAC(toggle));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buyers);