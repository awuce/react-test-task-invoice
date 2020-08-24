import React from "react";
import TerminalsForm from "./TerminalsForm/TerminalsForm";
import TerminalsList from "./TerminalsList/TerminalsList";

const Terminals = (props) => {
    let terminalsData = props.terminalsPage.terminalsData;

    let onAddTerminal = (values) => {
        props.addTerminal(values.terminalName, values.terminalDesc);
        values.terminalName = '';
        values.terminalDesc = '';
    }

    let onDeleteTerminal = (terminalId) => {
        props.deleteTerminal(terminalId);
        const raw = localStorage.getItem('terminals') || [];
        terminalsData = JSON.parse(raw);
    }

    return (
        <div>
            <TerminalsForm onSubmit={onAddTerminal} />
            <TerminalsList onDeleteTerminal={onDeleteTerminal} terminalsData={terminalsData} />
        </div>
    );
}

export default Terminals;