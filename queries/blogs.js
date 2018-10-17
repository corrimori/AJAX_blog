const knex = require('./db')

getAllBlogPosts = () => {
  console.log('in queries *****************');
  return knex('blogposts').orderBy('created_at', 'desc')
}

getBlogById = (id) => {
  return knex('blogposts').where('id', id)
}

createBlog = (body) => {
  return knex('blogposts')
  .insert(body).returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

updateBlog = (id, body) => {
  return knex('blogposts')
  .where('id', id)
  // .update(body)
  .update({
    name: body.name,
    price: body.price,
    description: body.description,
    tags: body.tags
  })
  .returning('*')
  .catch((err) => {
    console.error(err)
    knex.destroy()
    process.exit(1)
  })
}

deleteBlogById = (id) => {
  return knex('blogposts')
    .where('id', id)
    .del()
    .returning('*')
    .catch((err) => {
      console.error(err)
      knex.destroy()
      process.exit(1)
    })
}

module.exports = {
  getAllBlogPosts,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlogById
}
