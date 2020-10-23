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

export const getSingleBand = bandId => {
  return axios.get(`${baseUrl}/bands/${bandId}`)
}

export const createBand = bandFormData => {
  return axios.post(`${baseUrl}/bands`, bandFormData, withHeaders())
}

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const getAllProfiles = () => {
  return axios.get(`${baseUrl}/users`)
}

export const getSingleProfile = profileId => {
  return axios.get(`${baseUrl}/users/${profileId}`)
}

export const getUserProfile = () => {
  return axios.get(`${baseUrl}/profile`, withHeaders())
}