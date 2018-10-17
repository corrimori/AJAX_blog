const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3001

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const blogRoutes = require('./src/routes/blogs.js')
console.log('going to hit blog routes ++++++++++++');
app.use('/blogs', blogRoutes)

// any other route is not allowed
app.all('*', (req, res, next) => res.sendStatus(404))

app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`The Costume Shop is open on port ${port}!`)
  })
}

module.exports = app
