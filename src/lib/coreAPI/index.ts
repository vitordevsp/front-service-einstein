import axios from "axios"

export const coreAPI = axios.create({
  baseURL: process.env.BACKEND_CORE_LINK_API,
})
