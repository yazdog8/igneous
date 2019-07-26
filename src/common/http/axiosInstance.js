import axios from "axios"

const genericInstance = axios.create({
  baseURL: "/",
})

export const axiosGenericInstance = genericInstance
