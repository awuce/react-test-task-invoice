import {connect} from "react-redux";
import Buyer from "./Buyer";

let mapStateToProps = (state) => {
    return {
        buyersPage: state.buyersPage
    }
}
const BuyerContainer = connect(mapStateToProps, {})(Buyer);
export default BuyerContainer;