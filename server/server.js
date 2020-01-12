const express = require ('express');
const app = express();
const parser = require ('body-parser');

const cors = require ('cors');

app.use(parser.json());
app.use(cors());

const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');
const createEnrolledRouter = require('./helpers/create_router_enrolled.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('planetSaver');
  const modulesCollection = db.collection('modules');
  const learningContentCollection = db.collection('learningContent');
  const quizQuestionsCollection = db.collection('quizQuestions');
  const studentsCollection = db.collection('students');
  const enrolledModulesCollection = db.collection('enrolledModules');

  const modulesRouter = createRouter(modulesCollection);
  const learningContentRouter = createRouter(learningContentCollection);
  const quizQuestionsRouter = createRouter(quizQuestionsCollection);
	const studentsRouter = createRouter(studentsCollection);
  const enrolledModulesRouter = createEnrolledRouter(enrolledModulesCollection);

  app.use('/api/modules', modulesRouter);
  app.use('/api/learningContent', learningContentRouter);
  app.use('/api/quizQuestions', quizQuestionsRouter);
  app.use('/api/students', studentsRouter);
  app.use('/api/enrolledModules', enrolledModulesRouter);
})
.catch(console.err);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})
