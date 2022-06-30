import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, setIsFetchingAC } from '../../redux/allUsers-reducer';
import * as axios from 'axios';
import AllUsers from './AllUsers';
import React from 'react';
import Preloader from '../common/Preloader/Preloader'

class AllUsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);

      })
    }
  }

  onPageChange = (clickedPage) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(clickedPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${clickedPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items)
      this.props.setIsFetching(false);

    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <AllUsers users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (clickedPage) => {
      dispatch(setCurrentPageAC(clickedPage))
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);;