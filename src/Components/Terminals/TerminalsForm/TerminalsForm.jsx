import React from "react";
import style from "../Terminals.module.css"
import {Field, reduxForm} from "redux-form";

const TerminalForm = (props) => {
    return (
        <form className={style.terminalsForm} onSubmit={props.handleSubmit}>
            <div className={style.terminalNameWrapper}>
                <label htmlFor="terminalName">Название терминала</label>
                <Field name="terminalName" component="input" type="text" className={style.terminalName}/>
            </div>
            <div className={style.terminalDescWrapper}>
                <label htmlFor="description">Описание</label>
                <Field name="terminalDesc" component="textarea" type="text" className={style.terminalDesc} />
            </div>
            <div><button type="submit">Добавить</button></div>
        </form>
    )
}

const TerminalReduxForm = reduxForm({
    form: 'addTerminalForm'
})(TerminalForm)

export default TerminalReduxForm;