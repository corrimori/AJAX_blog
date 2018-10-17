const model = require('../models/blogs')

getAllBlogPosts = (req, res, next) => {
  console.log('in controller +++++++++++++++');
  let promise = model.getAllBlogPosts()

  promise.then( result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch( error => {
    next(error)
  })
}

getBlogById = (req, res, next) => {
  let id = req.params.id
  let promise = model.getBlogById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

createBlog = (req, res, next) => {
  console.log(req.body);
  let promise = model.createBlog(req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

updateBlog = (req, res, next) => {
  let id = req.params.id
  let promise = model.updateBlog(id, req.body)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}

deleteBlogById = (req, res, next) => {
  let id = req.params.id
  let promise = model.deleteBlogById(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(204).json(result)
  })

  promise.catch(error => {
    next(error)
  })
}



module.exports = {
  getAllBlogPosts,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlogById
}
