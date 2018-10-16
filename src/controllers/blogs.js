const model = require('../models/blogs')

getAllBlogs = (req, res, next) => {
  let promise = model.getAllBlogs()

  promise.then( result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch( error => {
    next( error )
  })
}

module.exports = {
  getAllBlogs
}
