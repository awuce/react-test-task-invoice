import React from "react";
import style from "./BuyersBody.module.css";

const BuyersBody = (props) => {
    const buyersMap = [...props.buyersData]
        .map( b =>  <Buyer buyerId={b.buyerId}
                           buyerName={b.buyerName}
                           averageCheck={b.averageCheck}
                           numberPurchases={b.numberPurchases}
                           totalProceeds={b.totalProceeds} /> )
    return (
        <div className={style.tableBody}>
            { buyersMap }
        </div>
    );
}

const Buyer = (props) => {
    return (
        <div className={style.customerString}>
            <div>{props.buyerId}</div>
            <div>{props.buyerName}</div>
            <div>{props.averageCheck}</div>
            <div>{props.numberPurchases}</div>
            <div>{props.totalProceeds}</div>
        </div>
    )
}

export default BuyersBody;