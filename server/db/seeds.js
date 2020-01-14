use planetSaver;
db.dropDatabase();

db.modules.insertMany([
	{
		moduleID: 'RGG123',
		moduleName:'Reduce Greenhouse Gasses'
	},
	{
		moduleID: 'BPGG123',
		moduleName:'Biggest Producer of Greenhouse Gasses'
	}
]);

db.quizQuestions.insertMany([
  { module_id: 'RGG123',
    quiz_id: 2,
    questions:[
      { number: 1,
      question: "Of all the green house gasses which on is the most significant?",
      options: {
        1: "Aerosols",
        2: "Carbon Dioxide",
        3: "Methane"
      },
      correct_answer: "Carbon Dioxide"
    },
    {number: 2,
      question: "In the countries that produce the most carbon dioxide what is the biggest culprit?",
      options: {
        1: "Creating Electrity",
        2: "Transportation",
        3: "Food Production"
      },
      correct_answer: "Creating Electrity"
    },
      {number: 3,
      question: "Through photosynthesis, plants create what?, from cardon dioxide?",
      options: {
        1: "Water",
        2: "Glucose",
        3: "Chlorophyll"
      },
      correct_answer: "Glucose"
    }
],
    pass_mark: 2
  },
  { module_id: 'BPGG123',
    quiz_id: 1,
    questions:[
      { number: 1,
      question: "What is A?",
      options: {
        1: "A",
        2: "B",
        3: "C"
      },
      correct_answer: "A"
    },
    {number: 2,
      question: "What is B?",
      options: {
        1: "A",
        2: "B",
        3: "C"
      },
      correct_answer: "B"
    },
      {number: 3,
      question: "What is C?",
      options: {
        1: "A",
        2: "B",
        3: "C"
      },
      correct_answer: "C"
    }
],
    pass_mark: 2
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

db.students.insertMany([
	{
		studentID: 'CPJA181293',
		studentName: 'Charlie Anderson'
	},
	{
		studentID: 'CPJA1812',
		studentName: 'Charlie Ander'
	}
]);

db.userTypes.insertMany([
	{
		userID: 'CPJA181293',
		userType: 'student'
	},
	{
		userID: 'TEACH1234',
		userType: 'teacher'
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

db.loginsystem.insertMany([
	{
		username: 'charlie',
		password: '12345',
		type: 'student'
	},
	{
		username: 'ghosty',
		password: '12345',
		type: 'teacher'
	}
]);
