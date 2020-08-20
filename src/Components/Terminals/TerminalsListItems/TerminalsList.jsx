import React from "react";
import style from "../Terminals.module.css"

const TerminalsList = (props) => {
    let terminalsMap = [...props.terminalsData]
        .map( t => <TerminalItem onDeleteTerminal={props.onDeleteTerminal}
                                 key={t.terminalId}
                                 terminalId={t.terminalId}
                                 name={t.name}
                                 desc={t.desc} /> )

    return (
        <div>
            <h3>Список терминалов</h3>
            <div className={style.terminalsListHeaders}>
                <div>Название терминала</div>
                <div>Описание</div>
            </div>
            { terminalsMap }
        </div>
    );
}

const TerminalItem = (props) => {
    return (
        <div className={style.terminalItem}>
            <div>{props.name}</div>
            <div>{props.desc}</div>
            <div><button type="submit" onClick={ () => props.onDeleteTerminal(props.terminalId) }>Удалить</button></div>
        </div>
    )
}

export default TerminalsList;