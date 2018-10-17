const blogQuery = require('../../queries/blogs')

const getAllBlogPosts = () => {
  console.log('in models @@@@@@@@@@@@@@@@@@@@@');
  blogs = blogQuery.getAllBlogPosts()

  return blogs.then( result => {
    return result.length < 1
    ? { error: 'error retrieving blogs', status: 404 }
    : result
  })
}

const getCostumeById = (id) => {
  blog = blogQuery.getBlogById(id)

  return blog.then(result => {
    return !result
      ? { error: 'error retreiving blog', status: 404 }
      : result
  })
}

const createCostume = (body) => {
  console.log('create, body--------->>', body);
  blog = blogQuery.createBlog(body)

  return blog.then(result => {
    return !result
      ? { error: 'error creating blog', status: 500 }
      : result
  })
}

const updateBlog = (id, body) => {
  blog = blogQuery.updateBlog(id, body)

  return blog.then(result => {
    return !result
      ? { error: 'error updating blog', status: 500 }
      : result
  })
}

const deleteBlogById = (id) => {
  blog = blogQuery.deleteBlogById(id)

  return blog.then(result => {
    return !result
      ? { error: 'error deleting blog', status: 500 }
      : result
  })
}

module.exports = {
  getAllBlogPosts,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlogById
}
