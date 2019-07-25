package data_services

import (
	"math/rand"
	"time"
)

type CPUDataResponse struct {
	UsageTimeSeries []map[time.Time]int `json:"cpuTimeSeries"`
}

func GetCPUDataWeekly() []map[time.Time]int {
	var CPUTimeSeries []map[time.Time]int
	currentCPUUsage := 0

	now := time.Now()
	lastWeek := now.AddDate(0, 0, -7)
	timeIteration := lastWeek

	for i := 0; i < 10080; i++ {
		timeIteration = timeIteration.Add(time.Minute)
		snapShot := make(map[time.Time]int)
		if rand.Intn(1000) == 5 {
			currentCPUUsage = rand.Intn(101)
		}
		snapShot[timeIteration] = currentCPUUsage
		CPUTimeSeries = append(CPUTimeSeries, snapShot)

	}
	return CPUTimeSeries
}

func GetCPUDataHourly() []map[time.Time]int {
	var CPUTimeSeries []map[time.Time]int
	currentCPUUsage := 0

	now := time.Now()
	lastWeek := now.AddDate(0, 0, -7)
	timeIteration := lastWeek

	for i := 0; i < 60; i++ {
		timeIteration = timeIteration.Add(time.Minute)
		snapShot := make(map[time.Time]int)
		if rand.Intn(1000) == 5 {
			currentCPUUsage = rand.Intn(101)
		}
		snapShot[timeIteration] = currentCPUUsage
		CPUTimeSeries = append(CPUTimeSeries, snapShot)
	}
	return CPUTimeSeries
}
