import React, {useEffect, useState} from "react";
import style from "./BuyersBody.module.css";

const BuyersBody = (props) => {
    const buyersMap = [...props.buyersData]
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
    const [buyerId, setBuyerId] = useState(props.buyerId)
    const [buyerName, setBuyerName] = useState(props.buyerName)
    const [averageCheck, setAverageCheck] = useState(props.averageCheck)
    const [checks, setChecks] = useState(props.checks)
    const [numberPurchases, setNumberPurchases] = useState(props.numberPurchases)
    const [totalProceeds, setTotalProceeds] = useState(props.totalProceeds)

    useEffect(() => {
        let total = checks.reduce((sum, check) => {
            return sum += check
        }, 0);
        setAverageCheck(Math.round(total / numberPurchases) || 0);
        setTotalProceeds(total);
    }, [checks])

    return (
        <div className={style.customerString}>
            <div>{buyerId}</div>
            <div>{buyerName}</div>
            <div>{averageCheck}</div>
            <div>{numberPurchases}</div>
            <div>{totalProceeds}</div>
        </div>
    )
}

export default BuyersBody;