import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        loginPage: state.loginPage
    }
}

const SidebarContainer = connect(mapStateToProps, {})(Sidebar);
export default SidebarContainer;