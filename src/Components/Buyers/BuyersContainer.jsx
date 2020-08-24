import {connect} from "react-redux";
import Buyers from "./Buyers";
import {
    setCurrentBuyersDataAC,
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
        setCurrentBuyersData: (data) => {
            dispatch(setCurrentBuyersDataAC(data));
        },
        sortById: (toggle, indexes) => {
            dispatch(sortByIdAC(toggle, indexes));
        },
        sortByName: (toggle, indexes) => {
            dispatch(sortByNameAC(toggle, indexes));
        },
        sortByAverageCheck: (toggle, indexes) => {
            dispatch(sortByAverageCheckAC(toggle, indexes));
        },
        sortByNumberPurchases: (toggle, indexes) => {
            dispatch(sortByNumberPurchasesAC(toggle, indexes));
        },
        sortByTotalProceeds: (toggle, indexes) => {
            dispatch(sortByTotalProceedsAC(toggle, indexes));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buyers);