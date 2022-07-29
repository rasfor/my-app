 import React, {useState} from "react";
import module from './Paginator.module.css';


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portion = Math.ceil(pagesCount/portionSize);
    let [currentPortion, setCurrentPortion] = useState(1);
    let leftPageOfPortion = (currentPortion-1) * portionSize + 1;
    let rightPageOfPortion = portionSize * currentPortion;

    return (
        <div>
            {currentPortion > 1 &&
                <button onClick={()=>{setCurrentPortion(currentPortion-1)}}>Prev</button>}
            {
                pages.filter((page)=>page >=leftPageOfPortion && page <=rightPageOfPortion).map((page)=>{
                       return <span key={page} className={currentPage === page ? module.selectedPage : module.page}
                              onClick={() => { onPageChange(page) }}> {page}  </span>
                    })
            }
            {currentPortion < portion &&
                <button onClick={()=>setCurrentPortion(currentPortion+1)}>Next</button>}
        </div>
    );
}

export default Paginator;