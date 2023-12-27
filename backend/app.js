const express = require('express')
const router = require('./routes/Routes')

require('dotenv').config()
const port = process.env.PORT

const app = express()

app.use(router)
app.listen(port)