import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, getUsers } from '../../redux/allUsers-reducer';
import AllUsers from './AllUsers';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { WithAuthRedirect } from '../hoc/WithAuthRedirect'
import {
    getAllUsers,
    getBoolFetching,
    getCurrentPage, getFollowingProcess,
    getPageSize,
    getTotalUsersCount
} from "../../redux/selectors/allUser-selectors";

class AllUsersContainer extends React.Component {
  componentDidMount() {
      const {currentPage, pageSize} = this.props;
      this.props.getUsers(currentPage, pageSize);
  }

  onPageChange = (clickedPage) => {
      const {pageSize} = this.props;
      this.props.getUsers(clickedPage, pageSize);
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
          followingProcess={this.props.followingProcess}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getBoolFetching(state),
    followingProcess: getFollowingProcess(state)
  }
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    getUsers
  }),
  WithAuthRedirect
)(AllUsersContainer);;