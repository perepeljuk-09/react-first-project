import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalCount,
  setUsers,
  unfollow, toggleFollowingProgress
} from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users/Users";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.sizePage).then(data => {debugger;
          this.props.toggleIsFetching(false)
          this.props.setUsers(data.items);
          this.props.setTotalCount(data.totalCount);
        }
    )
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.sizePage).then(data => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(data.items);

        }
    )
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
             toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    isFetching: state.usersPage.isFetching,
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
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleFollowingProgress
})(UsersContainer)
