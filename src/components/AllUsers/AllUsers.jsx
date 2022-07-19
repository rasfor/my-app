 import React from "react";
import User from './User/User';
import module from './AllUsers.module.css';
 import Paginator from "../common/Paginator/Paginator";


const AllUsers = ({totalUsersCount, pageSize, currentPage, onPageChange, ...props}) => {
    return (
        <div className={module.users} >
            <Paginator totalUsersCount={totalUsersCount} p
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChange={onPageChange} />
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