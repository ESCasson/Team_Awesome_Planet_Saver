const express = require ('express');
const app = express();
const parser = require ('body-parser');

const cors = require ('cors');

app.use(parser.json());
app.use(cors());

const MongoClient = require ('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('planetSaver');
  const modulesCollection = db.collection('modules');
  const learningContentCollection = db.collection('learningContent');
  const quizQuestionsCollection = db.collection('quizQuestions');
  const modulesRouter = createRouter(modulesCollection);
  const learningContentRouter = createRouter(learningContentCollection);
  const quizQuestionsRouter = createRouter(quizQuestionsCollection);
  app.use('/api/modules', modulesRouter);
  app.use('/api/learningContent', learningContentRouter);
  app.use('/api/quizQuestions', quizQuestionsRouter);
})
.catch(console.err);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})
