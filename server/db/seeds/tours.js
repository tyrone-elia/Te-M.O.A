exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tours')
    .del()
    .then(function () {
      return knex('tours').insert([
        { id: 1, name: 'Overland', description: 'hit some mud and mountains' },
        {
          id: 3,
          name: 'RiverRun',
          description: 'scenic drive around the rivers... and  mud',
        },
        { id: 2, name: 'LetsJustGo', description: 'all of the mud' },
      ])
    })
}
