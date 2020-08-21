import Terminals from "./Terminals";
import {connect} from "react-redux";
import {addTerminalAC, deleteTerminalAC} from "../../Reducers/terminals-reducer";

let mapStateToProps = (state) => {
    return {
        terminalsPage: state.terminalsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addTerminal: (terminalName, terminalDesc) => {
            dispatch(addTerminalAC(terminalName, terminalDesc));
        },
        deleteTerminal: (terminalName, terminalDesc) => {
            dispatch(deleteTerminalAC(terminalName, terminalDesc));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Terminals);