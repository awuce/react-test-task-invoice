import React, {useEffect, useState} from "react";
import style from "./Buyers.module.css";
import BuyersBody from "./BuyersBody/BuyersBody";
import BuyersHead from "./BuyersHead/BuyersHead";
import BuyersPagination from "./BuyersPagination/BuyersPagination";

const Buyers = (props) => {
    let buyersData = props.buyersPage.buyersData;
    const [currentPage, setCurrentPage] = useState(1);
    const [buyersPerPage, setBuyersPerPage] = useState(5);
    const [indexes, setIndexes] = useState([]);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(buyersData.length / buyersPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onChangePagination = (event) => {
        setBuyersPerPage(event.target.value);
        setCurrentPage(1);
    }

    useEffect(() => {
        let indexOfLastBuyer =  currentPage * buyersPerPage;
        let indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
        setIndexes([indexOfFirstBuyer, indexOfLastBuyer]);
        props.setCurrentBuyersData(buyersData.slice(indexOfFirstBuyer, indexOfLastBuyer));
    }, [buyersPerPage, currentPage])


    return (
        <div>
            <BuyersPagination buyersPerPage={buyersPerPage}
                              pageNumbers={pageNumbers}
                              currentPage={currentPage}
                              paginate={paginate}
                              onChangePagination={onChangePagination} />
            <div className={style.buyersTable}>
                <BuyersHead indexes={indexes}
                            sortById={props.sortById}
                            sortByName={props.sortByName}
                            sortByAverageCheck={props.sortByAverageCheck}
                            sortByNumberPurchases={props.sortByNumberPurchases}
                            sortByTotalProceeds={props.sortByTotalProceeds} />
                <BuyersBody buyersData={props.buyersPage.currentBuyersData} />
            </div>
        </div>
    );
}

export default Buyers;