import * as axios from 'axios'

const instals = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'c0b2b982-db8c-4015-8027-3d9f8fe70c59'
  }
})

export const getUsers = (currentPage, pageSize) => {
  return instals.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    })
}

export const getUsersFallowed = (followed, id) => {
  if(!followed) {
    return instals.post(`follow/${id}`).then(response => {
      return response.data
    })
  } else {
    return instals.delete(`follow/${id}`).then(response => {
      return response.data
    })
  }
  
}

export const getProfile = (userId) => {
  return instals.get(`profile/${userId}`).then(response => {
    return response.data
  })
}

export const getAuthUser = () => {
   return instals.get(`auth/me`).then(response => {
    return response.data        
  })
}