const express = require('express');
const ObjectId = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  // index
  router.get('/', (req, res) => {
    // toArray because db returns a shitey db thing that we need to convert.
    collection.find().toArray()
    .then(docs => res.json(docs))
    .catch((error) => {
      console.error(error);
      res.status(500);
      res.json({status: 500, error: error})
    })
  });

  router.get('/:id', (req, res) => {
    const id = ObjectId(req.params.id);
    collection.findOne({_id: id})
    .then(doc => res.json(doc))
  });

  router.post('/', (req, res) => {
    const new_data = req.body;
    collection.insertOne(new_data)
    .then((result) => {
      res.json(result.ops[0])
    })
  });

  router.delete('/:id',(req, res) => {
    const id = ObjectId(req.params.id);
    collection.deleteOne({_id: id})
    .then(result => res.json(result))
  });

router.put('/:id', (req, res) => {
  const id = ObjectId(req.params.id);
  const updatedData = req.body;
  collection.findOneAndUpdate(
    {_id: id},
    {$set: updatedData},
    {returnOriginal: false}
  )
  .then(result => res.json(result.value))
});

  return router;

};

module.exports = createRouter;
