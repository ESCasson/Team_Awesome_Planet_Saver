const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createLoginRouter = function (collection) {

  const router = express.Router();

	router.get('/', (req, res) => {
		collection.find().toArray()
		.then(docs => res.json(docs))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

	router.get('/:username/:password/', (req, res) => {
		const username = req.params.username;
		const password = req.params.password;

		collection.findOne({
			username: username,
			password: password
		})
		.then(result => res.json(result))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

  return router;
};

module.exports = createLoginRouter;
