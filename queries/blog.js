const knex = require('./db')

getAllBlogPosts = () => {
  return knex('blogs').orderBy('created_at', 'desc')
}


//
// getCostumeById = (id) => {
//   return knex('costumes').where('id', id)
// }
//
// getCostumeWithNestedTags = () => {
//   return knex('costumes')
//     .then(costumes => {
//       console.log('@@@@@@@@@@@@ in queries')
//       const promises = costumes.map(costume => {
//         return knex('costume_tags')
//         join('tags', 'tags.id', 'costume_tags.tag_id')
//         .where('costume_tags.costume_id', costume.id)
//         .then(tags => {
//           costume.tags = tags
//           console.log('tags----->', tags)
//           return costume
//         })
//       })
//       return Promise.all(promises)
//     })
// }
//
// createCostume = (body) => {
//   return knex('costumes')
//   .insert(body).returning('*')
//   .catch((err) => {
//     console.error(err)
//     knex.destroy()
//     process.exit(1)
//   })
// }
//
// updateCostume = (id, body) => {
//   return knex('costumes')
//   .where('id', id)
//   // .update(body)
//   .update({
//     name: body.name,
//     price: body.price,
//     description: body.description,
//     tags: body.tags
//   })
//   .returning('*')
//   .catch((err) => {
//     console.error(err)
//     knex.destroy()
//     process.exit(1)
//   })
// }
//
// deleteCostumeById = (id) => {
//   return knex('costumes')
//     .where('id', id)
//     .del()
//     .returning('*')
//     .catch((err) => {
//       console.error(err)
//       knex.destroy()
//       process.exit(1)
//     })
// }

module.exports = {
  getAllBlogPosts
  // getCostumeById,
  // getCostumeWithNestedTags,
  // createCostume,
  // updateCostume,
  // deleteCostumeById
}
