use planetSaver;
db.dropDatabase();

db.modules.insertMany([
	{
		moduleID: 'RGG123',
		moduleName:'Reduce_Greenhouse_Gasses',
		modulePassMark: 50
	},
	{
		moduleID: 'BPGG123',
		moduleName:'Biggest_Producer_of_Greenhouse_Gasses',
		modulePassMark: 50
	}
]);

db.learningContent.insertMany([
	{
		moduleID: 'RGG123',
		pageNumber: 1,
		data:'hi',
		contentName: 'hello world'
	},
	{
		moduleID: 'RGG123',
		pageNumber: 2,
		data:'goodbye',
		contentName: 'goodbye world'
	},
	{
		moduleID: 'RGG123',
		pageNumber: 3,
		data:'hello again',
		contentName: 'uwu'
	}
]);

db.quizQuestions.insertMany([
	{
		moduleID: 'RGG123',
		questionNumber: 1,
		questionData: 'what is my name',
		questionAnswer: 'charlie',
		possibleAnswers: ['charlie', 'greg', 'adrian']
	},
	{
		moduleID: 'RGG123',
		questionNumber: 2,
		questionData: 'who is the best',
		questionAnswer: 'me',
		possibleAnswers: ['me', 'you', 'no one']
	},
	{
		moduleID: 'RGG123',
		questionNumber: 3,
		questionData: 'what is the meaning of life',
		questionAnswer: '42',
		possibleAnswers: ['42', 'death', 'happiness', '45']
	}
]);

db.students.insertMany([
	{
		studentID: 'CPJA181293',
		studentName: 'Charlie Anderson'
	}
]);

db.enrolledModules.insertMany([
	{
		studentID: 'CPJA181293',
		moduleID: 'RGG123',
		quizResult:'',
		currentPage: [1, 3]
	}
]);
