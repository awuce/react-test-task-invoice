import React, {useEffect} from "react";
import style from "./BuyersBody.module.css";

const BuyersBody = (props) => {
    useEffect(() => {
        props.setInitialData()
    }, [])

    const buyersMap = props.buyersData
        .map( b =>  <Buyer key={b.buyerId}
                           buyerId={b.buyerId}
                           buyerName={b.buyerName}
                           averageCheck={b.averageCheck}
                           checks={b.checks}
                           numberPurchases={b.numberPurchases}
                           totalProceeds={b.totalProceeds} /> )

    return (
        <div className={style.tableBody}>
            { buyersMap }
        </div>
    );
}

const Buyer = (props) => {
    if (!props.buyerId) return (<></>)
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