use planetSaver;
db.dropDatabase();

db.modules.insertMany([
	{
		moduleID: 'RGG123',
		moduleName:'Reduce_Greenhouse_Gasses'
	},
	{
		moduleID: 'BPGG123',
		moduleName:'Biggest_Producer_of_Greenhouse_Gasses'
	}
]);

db.quizQuestions.insertMany([
  { module_id: 'RGG123',
    quiz_id: 2,
    questions:[
      { number: 1,
      question: "What is 1?",
      options: {
        1: "1",
        2: "2",
        3: "3"
      },
      correct_answer: "1"
    },
    {number: 2,
      question: "What is 2?",
      options: {
        1: "1",
        2: "2",
        3: "3"
      },
      correct_answer: "2"
    },
      {number: 3,
      question: "What is 3?",
      options: {
        1: "1",
        2: "2",
        3: "3"
      },
      correct_answer: "3"
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
