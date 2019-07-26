import { axiosGenericInstance } from "../axiosInstance"

export const getWeeklyTimeSeries = async () => {
  try {
    const { data } = await axiosGenericInstance.get("/weekly")
    return data
  } catch (error) {
    console.log("getWeeklyTimeSeries error", error)
  }
}

export const getHourlyTimeSeries = async () => {
  try {
    const { data } = await axiosGenericInstance.get("/hourly")
    return data
  } catch (error) {
    console.log("getHourlyTimeSeries error", error)
  }
}

export const getUsaGDP = async (querySize = 5000) => {
  try {
    const { data } = await axiosGenericInstance.get(`/usa_gdp/${querySize}`)
    return data
  } catch (error) {
    console.log("getUsaGDP error", error)
  }
}
