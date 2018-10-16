const blogQuery = require('../../queries/blogs')

const getAllBlogs = () => {
  blogs = blogQuery.getAllBlogs()

  return blogs.then( result => {
    return result.length < 1
    ? { error: 'error retrieving blogs', status: 404 } : result
  })
}

module.exports = {
  getAllBlogs
}
