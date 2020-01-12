const express = require('express');
const ObjectId = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

// Index ?
  router.get('/', (req, res) => {
    collection.find().toArray()
    .then(docs => res.json(docs))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({status: 500, error: error})
    })
  });

// Module ?
  router.get('/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    collection.findOne({_id: id})
    .then(doc => res.json(doc))
  });

  return router;

};

module.exports = createRouter;
