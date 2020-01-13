const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createEnrolledRouter = function (collection) {

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

	router.get('/:student/:module/', (req, res) => {
		const studentID = req.params.student;
		const moduleID = req.params.module;

		collection.find({
			studentID: studentID,
			moduleID: moduleID
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

module.exports = createEnrolledRouter;
