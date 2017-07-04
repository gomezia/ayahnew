/*
* client.js
*/
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:5984'

const AxiosInstance = axios.create({
  baseURL: baseUrl
  /* other custom settings */
})

// Export Module
export default AxiosInstance
