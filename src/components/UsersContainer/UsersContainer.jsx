import {connect} from "react-redux";
import {
  follow,unfollow,getUsersThunkCreactor
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users/Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreactor(this.props.currentPage, this.props.sizePage)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreactor(pageNumber, this.props.sizePage)
  }

  render() {
    return <>{
      this.props.isFetching ? <Preloader/> : null}
      <Users onPageChanged={this.onPageChanged}
             users={this.props.users}
             sizePage={this.props.sizePage}
             totalCount={this.props.totalCount}
             currentPage={this.props.currentPage}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    sizePage: state.usersPage.sizePage,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    followingInProgress: state.usersPage.followingInProgress
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCountAC(totalCount))
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching))
//     },
//   }
// }
export default connect(mapStateToProps, {
  follow,
  unfollow,
  getUsersThunkCreactor
})(UsersContainer)
