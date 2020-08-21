import React from "react";
import style from "./Buyers.module.css";
import BuyersBody from "./BuyersBody/BuyersBody";

const Buyers = (props) => {
    let buyersData = props.buyersPage.buyersData
    return (
        <div className={style.buyersTable}>
            <div className={style.tableHead}>
                <div>ID покупателя</div>
                <div>Имя покупателя</div>
                <div>Средний чек</div>
                <div>Количество покупок</div>
                <div>Общая выручка</div>
            </div>
            <BuyersBody buyersData={buyersData}/>
        </div>
    );
}

export default Buyers;