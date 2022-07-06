import React from "react";
import User from './User/User';
import module from './AllUsers.module.css';


const AllUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={module.users} >
            <div>
                {pages.map((page) => {
                    return (
                        <span className={props.currentPage === page ? module.selectedPage : module.page}
                            onClick={() => { props.onPageChange(page) }}>{page}</span>
                    )
                })}
            </div>
            <div>
                {props.users.map((user) => {
                    return <User key={user.id}
                        userData={user}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingProcess={props.followingProcess}
                    />
                })}
            </div>
        </div>
    );
}

export default AllUsers;