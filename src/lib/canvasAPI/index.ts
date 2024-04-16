import axios from "axios"

export const canvasAPI = axios.create({
  baseURL: process.env.CANVAS_LINK_API,
  headers: {
    Authorization: `Bearer ${process.env.CANVAS_API_KEY}`,
  }
})
