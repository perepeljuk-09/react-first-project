import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setTotalCount,
  setUsers,
  unfollow
} from "../../Redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users/Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.sizePage}`, {
      withCredentials: true
    })
        .then(response => {
          this.props.toggleIsFetching(false)
              this.props.setUsers(response.data.items);
              this.props.setTotalCount(response.data.totalCount);
            }
        )
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.sizePage}`,{
      withCredentials: true
    })
        .then(response => {
          this.props.toggleIsFetching(false)
              this.props.setUsers(response.data.items);

            }
        )
  }

  render() {
    return <>{
      this.props.isFetching ? <Preloader />: null}
      <Users onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  sizePage={this.props.sizePage}
                  totalCount={this.props.totalCount}
                  currentPage={this.props.currentPage}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
    />
      </>
  }
};

const mapStateToProps = (state) => {
  return{
    users: state.usersPage.users,
    sizePage: state.usersPage.sizePage,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
  toggleIsFetching
})(UsersContainer)
