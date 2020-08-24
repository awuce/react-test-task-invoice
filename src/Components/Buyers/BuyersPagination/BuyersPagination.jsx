import React from "react";
import style from "./BuyersPagination.module.css";

const BuyersPagination = (props) => {
    return (
        <div>
            <div className={style.paginationPerPage}>
                <div>Разбивка на страницы:</div>
                <select value={props.buyersPerPage} onChange={props.onChangePagination}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>
            <nav>
                { (props.pageNumbers.length > 1) && props.pageNumbers.map(num => (
                    <span key={num} className={ props.currentPage === num ? style.selectedPage : style.paginationPage }
                          onClick={(e) => props.paginate(num)} >
                        {num}
                    </span>
                 ))}
            </nav>
        </div>
    )
}

export default BuyersPagination;