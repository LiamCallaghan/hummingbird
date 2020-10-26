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
  return axios.post(`${baseUrl}/bands/`, bandFormData, withHeaders())
}

export const registerUser = formData => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

export const getAllProfiles = () => {
  return axios.get(`${baseUrl}/auth/users`)
}

export const getSingleProfile = profileId => {
  return axios.get(`${baseUrl}/auth/users/${profileId}`)
}

export const getUserProfile = () => {
  return axios.get(`${baseUrl}/auth/profile`, withHeaders())
}

export const getGenreList = () => {
  return axios.get(`${baseUrl}/genres`)
}

export const getInstrumentList = () => {
  return axios.get(`${baseUrl}/instruments`)
}

export const startChat = (chatFormData, bandId) => {
  return axios.post(`${baseUrl}/chat/`, chatFormData, bandId, withHeaders())
}

export const createMessage = (messageFormData, chatId) => {
  return axios.post(`${baseUrl}/messages/`, messageFormData, chatId, withHeaders())
}

export const getChatList = () => {
  return axios.get(`${baseUrl}/chat`, withHeaders())
}

export const getMessageList = () => {
  return axios.get(`${baseUrl}/messages`, withHeaders())
}