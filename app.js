const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3001

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const blogRoutes = require('./src/routes/blog.js')
app.use('/blog', blogRoutes)
