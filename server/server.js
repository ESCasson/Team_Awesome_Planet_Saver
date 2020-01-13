const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')
const createRouterLearning = require('./helpers/create_router_learning.js')

app.use(cors())
app.use(bodyParser.json())

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('planetsave')
    const modulesCollection = db.collection('modules')
    const modulesRouter = createRouter(modulesCollection)
    app.use('/api/modules', modulesRouter)

    const learningCollection = db.collection('learningContent')
    const learningRouter = createRouterLearning(learningCollection)
    app.use('/api/learning', learningRouter)
  })
  .catch(console.err)

app.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`)
})
