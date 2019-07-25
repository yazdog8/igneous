package server

import (
	"igneous-hw-template/server/config"
	"igneous-hw-template/server/data_services"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type ResponseObject struct {
	Message string `json:"message"`
}

func Run() {
	conf := config.Read()
	router := gin.Default()

	router.Use(cors.Default())

	api := router.Group("/api/" + conf.Api.Version)

	ping := func(c *gin.Context) {
		resp := ResponseObject{
			Message: "Success",
		}
		c.JSON(http.StatusOK, resp)
	}

	getCPUDataWeekly := func(c *gin.Context) {
		cpuData := data_services.GetCPUDataWeekly()
		cpuResp := data_services.CPUDataResponse{
			UsageTimeSeries: cpuData,
		}
		c.JSON(http.StatusOK, cpuResp)
	}

	getCPUDataHourly := func(c *gin.Context) {
		cpuData := data_services.GetCPUDataHourly()
		cpuResp := data_services.CPUDataResponse{
			UsageTimeSeries: cpuData,
		}
		c.JSON(http.StatusOK, cpuResp)
	}

	api.GET("/ping", ping)
	api.GET("/cpu-data-weekly", getCPUDataWeekly)
	api.GET("/cpu-data-hourly", getCPUDataHourly)

	router.Run(":" + conf.Api.Port)
}
