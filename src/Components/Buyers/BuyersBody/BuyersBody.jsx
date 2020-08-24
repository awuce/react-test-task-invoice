import React from "react";
import style from "./BuyersBody.module.css";
import {NavLink} from "react-router-dom";

const BuyersBody = (props) => {
    const buyersMap = props.buyersData
        .map( b =>  <BuyerLine key={b.buyerId}
                               buyerId={b.buyerId}
                               buyerName={b.buyerName}
                               averageCheck={b.averageCheck}
                               checks={b.checks}
                               numberPurchases={b.numberPurchases}
                               totalProceeds={b.totalProceeds}
                               setInitialData={props.setInitialData}/> );

    return <div>{ buyersMap }</div>;
}

const BuyerLine = (props) => {
    return (
        <div className={style.buyerLine}>
            <div>{props.buyerId}</div>
            <div className={style.buyerLineLinkName}>
                <NavLink to={"/buyers/" + props.buyerId}>
                    {props.buyerName}
                </NavLink>
            </div>
            <div>{props.averageCheck}</div>
            <div>{props.numberPurchases}</div>
            <div>{props.totalProceeds}</div>
        </div>
    )
}

export default BuyersBody;