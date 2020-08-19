import React from "react";
import style from "./Terminals.module.css"

const TerminalItem = (props) => {
    return (
        <div className={style.terminalItem}>
            <div>{props.name}</div>
            <div>{props.desc}</div>
            <div><button>Удалить</button></div>
        </div>
    );
}

const Terminals = (props) => {
    let state = [
        {id: 0, name: "Terminal 1", desc: "None Desc"},
        {id: 1, name: "Terminal 2", desc: "None Desc"},
        {id: 2, name: "Terminal 3", desc: "None Desc Desc"},
        {id: 3, name: "Terminal 4"} ,
    ]
    let terminalsMap = [...state]
        .map( t => <TerminalItem key={t.id} name={t.name} desc={t.desc} /> )

    return (
        <div>
            <form className={style.terminalsForm}>
                <h3>Добавить терминал</h3>
                <div>Название терминала</div>
                <input className={style.terminalName} type="text"/>
                <div>Описание</div>
                <textarea className={style.terminalDesc} />
                <div><button>Добавить</button></div>
            </form>
            <div className={style.terminalsList}>
                <h3>Список терминалов</h3>
                <div className={style.terminalsListHeaders}>
                    <div>Название терминала</div>
                    <div>Описание</div>
                </div>
                { terminalsMap }
            </div>
        </div>
    );
}

export default Terminals;