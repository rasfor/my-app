import * as axios from 'axios';
import User from './User/User';
import module from './AllUsers.module.css';
import React from 'react';

class AllUsersC extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      })
    }
  }

  onPageChange = (clickedPage) => {
    this.props.setCurrentPage(clickedPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${clickedPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div className={module.users} >
        <div>
          {pages.map((page) => {
            return (
              <span className={this.props.currentPage === page ? module.selectedPage : module.page}
                onClick={() => { this.onPageChange(page) }}>{page}</span>
            )
          })}
        </div>
        <div>
          {this.props.users.map((user) => {
            return <User key={user.id}
              userData={user}
              follow={this.props.follow}
              unfollow={this.props.unfollow} />
          })}
        </div>
      </div>
    )
  }
}

export default AllUsersC;