const express = require ('express');
const app = express();
const parser = require ('body-parser');

const cors = require ('cors');

app.use(parser.json());
app.use(cors());

const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');
const createEnrolledRouter = require('./helpers/create_router_enrolled.js');
const createLearningRouter = require('./helpers/create_router_learning.js');
const createUserRouter = require('./helpers/create_user_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('planetSaver');

  const modulesCollection = db.collection('modules');
	const modulesRouter = createRouter(modulesCollection);

  const learningContentCollection = db.collection('learningContent');
	const learningContentRouter = createLearningRouter(learningContentCollection);


  const studentsCollection = db.collection('students');
	const studentsRouter = createRouter(studentsCollection);

  const enrolledModulesCollection = db.collection('enrolledModules');
  const enrolledModulesRouter = createEnrolledRouter(enrolledModulesCollection);

	const quizCollection = db.collection('quizQuestions');
	const quizRouter = createRouter(quizCollection);

	const userTypeCollection = db.collection('userTypes');
	const userTypeRouter = createUserRouter(userTypeCollection);

	app.use('/api/quizQuestions', quizRouter);
	app.use('/api/modules', modulesRouter);
	app.use('/api/learningContent', learningContentRouter);
	app.use('/api/students', studentsRouter);
	app.use('/api/enrolledModules', enrolledModulesRouter);
	app.use('/api/userType', userTypeRouter);
})
.catch(err => console.error(err.message));

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})
