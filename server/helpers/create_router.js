const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

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

	router.get('/:module/:page', (req, res) => {
		const moduleName = req.params.module;
		const pageNumber = parseInt(req.params.page);

		collection.findOne({
			moduleName: moduleName,
			pageNumber: pageNumber
		})
		.then(result => res.json(result))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

	router.get('/:module', (req, res) => {
		const moduleName = req.params.module;

		collection.find({
			moduleName: moduleName
		}).toArray()
		.then(result => res.json(result))
		.catch(err => {
			console.error(err);
			res.status(500);
			res.json({ status: 500, error: err });
		});
	});

  return router;
};

module.exports = createRouter;
