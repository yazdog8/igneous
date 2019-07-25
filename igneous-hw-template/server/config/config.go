package config

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	Api struct {
		Version string `json:"version"`
		Port    string `json:"port"`
	} `json:"api"`
}

func Read() Config {
	var config Config

	viper.SetConfigName("config")
	viper.AddConfigPath(".")

	err := viper.ReadInConfig()

	if err != nil {
		log.Fatal(err.Error())
	}

	err = viper.Unmarshal(&config)

	if err != nil {
		log.Fatal(err.Error())
	}

	return config
}
