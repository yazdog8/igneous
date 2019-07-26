import axiosInstance from "src/common/http/axiosInstance"

export const getWeeklyTimeSeries = async () => {
  try {
    const { data } = await axiosInstance.get("/weekly")
    return data
  } catch (error) {
    console.log("getWeeklyTimeSeries error", error)
  }
}

export const getHourlyTimeSeries = async () => {
  try {
    const { data } = await axiosInstance.get("/hourly")
    return data
  } catch (error) {
    console.log("getHourlyTimeSeries error", error)
  }
}

export const getUsaGDP = async (querySize = 5000) => {
  try {
    const { data } = await axiosInstance.get(`/usa_gdp/${querySize}`)
    return data
  } catch (error) {
    console.log("getUsaGDP error", error)
  }
}
