import React from "react";
import TerminalsForm from "./TerminalsForm/TerminalsForm";
import TerminalsList from "./TerminalsList/TerminalsList";
import {Redirect} from "react-router-dom";

const Terminals = (props) => {

    let terminalsData = props.terminalsPage.terminalsData;

    let onAddTerminal = (values) => {
        props.addTerminal(values.terminalName, values.terminalDesc);
        values.terminalName = "";
        values.terminalDesc = "";
    }

    let onDeleteTerminal = (terminalId) => {
        props.deleteTerminal(terminalId);
        const raw = localStorage.getItem("terminals") || [];
        terminalsData = JSON.parse(raw);
    }

    if (!props.loginPage.isAuth) return <Redirect to={"/login"} />
    return (
        <div>
            <TerminalsForm onSubmit={onAddTerminal} />
            <TerminalsList onDeleteTerminal={onDeleteTerminal} terminalsData={terminalsData} />
        </div>
    );
}

export default Terminals;