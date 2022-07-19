 import React from "react";
import module from './Paginator.module.css';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curPage = currentPage;
    let start = ((curPage - 5) < 0) ?  0  : curPage - 5 ;
    let end = curPage + 5;
    let slicedPages = pages.slice( start, end);

    return (
        <div>
            {slicedPages.map((page) => {
                return (
                    <span className={currentPage === page ? module.selectedPage : module.page}
                        onClick={() => { onPageChange(page) }}> {page}  </span>
                )
            })}
        </div>
    );
}

export default Paginator;