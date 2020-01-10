use planetSaver;
db.dropDatabase();

db.modules.insertMany([
	{
		moduleName:'Reduce_Greenhouse_Gasses',
		modulePassMark: 50
	},
	{
		moduleName:'Biggest_Producer_of_Greenhouse_Gasses',
		modulePassMark: 50
	}
]);

db.learningContent.insertMany([
	{
		moduleName:'Reduce_Greenhouse_Gasses',
		pageNumber: 1,
		data:'hi',
		contentName: 'hello world'
	},
	{
		moduleName:'Reduce_Greenhouse_Gasses',
		pageNumber: 2,
		data:'goodbye',
		contentName: 'goodbye world'
	},
	{
		moduleName:'Reduce_Greenhouse_Gasses',
		pageNumber: 3,
		data:'hello again',
		contentName: 'uwu'
	}
]);

db.quizQuestions.insertMany([
	{
		moduleName: 'Reduce_Greenhouse_Gasses',
		questionNumber: 1,
		questionData: 'what is my name',
		questionAnswer: 'charlie',
		possibleAnswers: ['charlie', 'greg', 'adrian']
	},
	{
		moduleName: 'Reduce_Greenhouse_Gasses',
		questionNumber: 2,
		questionData: 'who is the best',
		questionAnswer: 'me',
		possibleAnswers: ['me', 'you', 'no one']
	},
	{
		moduleName: 'Reduce_Greenhouse_Gasses',
		questionNumber: 3,
		questionData: 'what is the meaning of life',
		questionAnswer: '42',
		possibleAnswers: ['42', 'death', 'happiness', '45']
	}
]);
