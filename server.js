const express = require("express")
const axios = require("axios")
const fs = require("fs")
const moment = require("moment")
const app = express()
const port = process.env.PORT || 5000

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" })
})

app.get("/usa_gdp/:size", (req, res) => {
  axios
    .get(
      `http://api.worldbank.org/countries/USA/indicators/NY.GDP.MKTP.CD?per_page=${req.params.size}&format=json`
    )
    .then(({ data }) => {
      const mappedData = data[1].map(item => {
        const itemData = {}
        itemData[moment(item.date).toISOString()] = item.value
        return itemData
      })
      res.send({ usaGDP: mappedData })
    })
    .catch(err => console.error(err))
})

app.get("/hourly", (req, res) => {
  fs.readFile("./server/data/hourly.json", "utf8", (err, data) => {
    if (err) throw err
    const info = JSON.parse(data)
    res.send(JSON.stringify(info))
  })
})

app.get("/weekly", (req, res) => {
  fs.readFile("./server/data/weekly.json", "utf8", (err, data) => {
    if (err) throw err
    const info = JSON.parse(data)
    res.send(JSON.stringify(info))
  })
})
