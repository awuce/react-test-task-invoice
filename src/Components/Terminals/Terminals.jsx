import React from "react";
import style from "./Terminals.module.css"
import TerminalsForm from "./TerminalsForm/TerminalsForm";
import TerminalsList from "./TerminalsListItems/TerminalsList";

const Terminals = (props) => {
    let terminalsData = props.terminalsPage.terminalsData

    let onAddTerminal = (values) => {
        props.addTerminal(values.terminalName, values.terminalDesc)
        values.terminalName = ''
        values.terminalDesc = ''
    }
    let onDeleteTerminal = (terminalId) => {
        props.deleteTerminal(terminalId)
    }

    return (
        <div>
            <TerminalsForm onSubmit={onAddTerminal} className={style.terminalsFormWrapper}/>
            <TerminalsList onDeleteTerminal={onDeleteTerminal} terminalsData={terminalsData} className={style.terminalsListWrapper} />
        </div>
    );
}

export default Terminals;