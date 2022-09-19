const express = require('express')

const db = require('../db/tours')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTours()
    .then((results) => {
      res.json({ tours: results.map((tour) => tour.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
