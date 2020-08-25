import React from "react";
import style from "./Buyer.module.css"
import {Redirect} from "react-router-dom";

const Buyer = (props) => {
    const id = props.match.params.id - 1;
    const buyer = props.buyersPage.buyersData[id];

    if (!props.loginPage.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={style.buyerWrapper}>
            <div>
                <div>ID покупателя</div>
                <div>{buyer.buyerId}</div>
            </div>
            <div>
                <div>Имя покупателя</div>
                <div>{buyer.buyerName}</div>
            </div>
            <div>
                <div>Чеки</div>
                <div>{ (buyer.checks.length > 0)
                    ? buyer.checks.map((c, i) => <span key={i}>{c}$ </span>)
                    : <span>нет чеков</span>
                }</div>
            </div>
            <div>
                <div>Средний чек</div>
                <div>{buyer.averageCheck}$</div>
            </div>
            <div>
                <div>Количество покупок</div>
                <div>{buyer.numberPurchases}</div>
            </div>
            <div>
                <div>Общая выручка</div>
                <div>{buyer.totalProceeds}$</div>
            </div>
        </div>
    )
}

export default Buyer;