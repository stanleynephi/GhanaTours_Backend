const express = require("express")
const env = require("dotenv").config()
const cors = require("cors")
const app = express()

app.use(cors())

const port = process.env.PORT
const host = process.env.HOST

app.listen(port, () => {
  console.log(`app is listening on ${host}:${port}`)
})
