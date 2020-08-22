import React, {useState} from "react";
import style from "./BuyersHead.module.css";

const Button = (props) => {
    let [toggle, setToggle] = useState(true);

    function sort() {
        props.sort(toggle);
        setToggle(!toggle);
    }

    return (
        <span>
            <button onClick={ sort }>
                { (toggle) ? `v` : `^` }
            </button>
        </span>
    )
}

const BuyersHead = (props) => {
    return (
        <div className={style.tableHead}>
            <div>
                <div>ID покупателя</div>
                <Button sort={props.sortById}/>
            </div>
            <div>
                <div>Имя покупателя</div>
                <Button sort={props.sortByName}/>
            </div>
            <div>
                <div>Средний чек</div>
                <Button sort={props.sortByAverageCheck}/>
            </div>
            <div>
                <div>Количество покупок</div>
                <Button sort={props.sortByNumberPurchases}/>
            </div>
            <div>
                <div>Общая выручка</div>
                <Button sort={props.sortByTotalProceeds}/>
            </div>
        </div>
    )
}

export default BuyersHead;