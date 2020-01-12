const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require ('./helpers/create_router.js');
const cors = require('cors');

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('planetsaver');
  const quizCollection = db.collection('quizQuestions');
  const quizRouter = createRouter(quizCollection);
  app.use('/api/quiz', quizRouter);
})

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('planetsaver');
  const studentCollection = db.collection('students');
  const studentRouter = createRouter(studentCollection);
  app.use('/api/students', studentRouter);
})

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
