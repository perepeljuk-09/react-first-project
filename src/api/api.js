import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '44ad73ce-f919-47e4-9e97-05d3d208f1ba'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, sizePage = 10) {
    return instance.get(`users?page=${currentPage}&count=${sizePage}`).then(response => response.data)
  },
  unfollow(userId) {
   return instance.delete(`follow/${userId}`)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  }
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
  }
}
export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get(`profile/` + userId)
  }
}


