use planetSaver;
db.dropDatabase();

db.modules.insertMany([
	{
		moduleName:'Reduce Greenhouse Gasses',
		modulePassMark: 50
	},
	{
		moduleName:'Biggest Producer of Greenhouse Gasses',
		modulePassMark: 50
	}
]);

db.learningContent.insertMany([
	{
		moduleID:'5e18c6075be47028d768b9f9',
		pageNumber: 0,
		data:'',
		contentName: ''
	},
	{
		moduleID:'5e18c6075be47028d768b9f9',
		pageNumber: 0,
		data:'',
		contentName: ''
	},
	{
		moduleID:'5e18c6075be47028d768b9f9',
		pageNumber: 0,
		data:'',
		contentName: ''
	}
]);

db.quizQuestions.insertMany([
	{
		moduleID: '5e18c6075be47028d768b9f9',
		questionNumber: 0,
		questionData: '',
		questionAnswer: '',
		possibleAnswers: []
	},
	{
		moduleID: '5e18c6075be47028d768b9f9',
		questionNumber: 0,
		questionData: '',
		questionAnswer: '',
		possibleAnswers: []
	},
	{
		moduleID: '5e18c6075be47028d768b9f9',
		questionNumber: 0,
		questionData: '',
		questionAnswer: '',
		possibleAnswers: []
	}
]);
