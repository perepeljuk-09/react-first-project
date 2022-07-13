import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  users: [
  ],
  sizePage: 5,
  totalCount: 19,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })}
    case SET_USERS:
    return {...state, users: [...action.users]
    }
    case SET_CURRENT_PAGE:
    return {...state, currentPage: action.pageNumber
    }
    case SET_TOTAL_COUNT:
    return {...state, totalCount: action.totalCount
    }
    case SET_IS_FETCHING:
    return {...state, isFetching: action.isFetching
    }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }
    default: return state;
  }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunkCreactor = (currentPage, sizePage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, sizePage).then(data => {
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalCount(data.totalCount));
          dispatch(setCurrentPage(currentPage));
        }
    )
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export default profileReducer;