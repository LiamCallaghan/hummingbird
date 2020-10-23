import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

export const getBandList = () => {
  return axios.get(`${baseUrl}/bands`)
}

export const getSingleProfile = profileId => {
  return axios.get(`${baseUrl}/users/${profileId}`)
}

export const getUserProfile = () => {
  return axios.get(`${baseUrl}/profile`, withHeaders())
}