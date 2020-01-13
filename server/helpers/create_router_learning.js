const express = require('express')

const createRouterLearning = function (collection) {
  const router = express.Router()

  // Index ?
  router.get('/', (req, res) => {
    collection.find().toArray()
      .then(docs => res.json(docs))
      .catch((error) => {
        console.error(error)
        res.status(500)
        res.json({ status: 500, error: error })
      })
  })

  // Module ?
  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection.find({
      moduleID: parseInt(id)
    }).toArray()
      .then(result => res.json(result))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
      })
  })
  return router
}

module.exports = createRouterLearning
