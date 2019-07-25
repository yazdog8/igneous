### Install
1. Install Golang: https://golang.org/doc/install#install

2. Place the all of the contents of this folder in the following location on your computer:

```sh
$ $GOPATH/src/igneous-hw-template
```

3. This project requires two third party Go packages to compile and run. Follow the installation instructions for each on their respective repos:
   1. https://github.com/spf13/viper
   2. https://github.com/gin-gonic/gin#installation
   3. https://github.com/gin-contrib/cors

### Server
To start the server:

1. Navigate to the folder containing the `main.go` file
2. Run `go build main.go` using the Go CLI. An executable file will be created in the same directory
3. Execute the newly created executable file. Your server should now be running on port 3000

### Endpoints
The project contains one existing endpoint. You can find the handler and route for it in the `server.go` file. You can use it as an example when creating
your data endpoints for the project.

route: `/api/v1/cpu-data-weekly`
Retrieves 10080 minutes (one week) of time series cpu usage data

route: `/api/v1/cpu-data-hourly`
Retrieves 60 minutes of time series cpu usage data
