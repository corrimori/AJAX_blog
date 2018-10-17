const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/blogs')

router.get('/', ctrl.getAllBlogPosts)
router.get('/:id', ctrl.getBlogById)
router.post('/', ctrl.createBlog)
router.put('/:id', ctrl.updateBlog)
router.delete('/:id', ctrl.deleteBlogById)

module.exports = router
