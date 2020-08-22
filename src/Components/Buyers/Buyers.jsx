import React from "react";
import style from "./Buyers.module.css";
import BuyersBody from "./BuyersBody/BuyersBody";
import BuyersHead from "./BuyersHead/BuyersHead";

const Buyers = (props) => {
    let buyersData = props.buyersPage.buyersData
    return (
        <div className={style.buyersTable}>
            <BuyersHead {...props} />
            <BuyersBody buyersData={buyersData} setInitialData={props.setInitialData}/>
        </div>
    );
}


export default Buyers;