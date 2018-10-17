exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogposts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('blogposts').insert([
        {
          id: 1,
          title: 'Monday',
          content: 'Today it was sunny with a cool breeze'
        },
        {
          id: 2,
          title: 'Tuesday',
          content: 'The clouds rolled in over the hills'
        },
        {
          id: 3,
          title: 'Wednesday',
          content: 'Rain poured down filling buckets'
        }
      ])
    })
    .then(() =>
      knex.raw(
        `SELECT setval('"blogposts_id_seq"', (SELECT MAX("id") FROM "blogposts"))`
      )
    )
}
