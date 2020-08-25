import React from "react";
import style from "./TerminalsForm.module.css"
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../Utils/FormControl";
import {maxLengthCreator, minLengthCreator, required} from "../../../Utils/validators";

const minLength1 = minLengthCreator(1);
const maxLength50 = maxLengthCreator(50);
const maxLength150 = maxLengthCreator(150);

const TerminalsForm = (props) => {
    return (
        <form className={style.terminalsForm} onSubmit={props.handleSubmit}>
            <h3>Добавить терминал</h3>
            <div className={style.terminalNameWrapper}>
                <label htmlFor="terminalName">Название терминала</label>
                <Field name="terminalName" component={Input}
                       type="text" className={style.terminalName}
                       validate={[required, minLength1, maxLength50]} />
            </div>
            <div className={style.terminalDescWrapper}>
                <label htmlFor="description">Описание</label>
                <Field name="terminalDesc" component={Textarea}
                       type="text" className={style.terminalDesc}
                       validate={[required, minLength1, maxLength150]} />
            </div>
            <div><button type="submit">Добавить</button></div>
        </form>
    )
}

const TerminalsReduxForm = reduxForm({
    form: 'addTerminalForm'
})(TerminalsForm)

export default TerminalsReduxForm;