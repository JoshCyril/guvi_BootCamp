const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("database connected")
})

const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/api', routesUrl)
app.listen(port || 4000, () => { console.log('server is running...') })