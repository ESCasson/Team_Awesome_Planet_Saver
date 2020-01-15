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
		moduleName:'Reduce Greenhouse Gasses',
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
		moduleName:'Reduce Greenhouse Gasses',
		pageNumber: 1,
		data:"The greenhouse effect is a process that occurs when gases in Earth\'s atmosphere trap the Sun\'s heat. This process makes Earth much warmer than it would be without an atmosphere. The greenhouse effect is one of the things that makes Earth a comfortable place to live.",
		contentName: 'What is the Greenhouse Effect?'
	},
	{
		moduleID: 'RGG123',
		moduleName:'Reduce Greenhouse Gasses',
		pageNumber: 2,
		data:"As you might expect from the name, the greenhouse effect works … like a greenhouse! A greenhouse is a building with glass walls and a glass roof. Greenhouses are used to grow plants, such as tomatoes and tropical flowers.<br /> A greenhouse stays warm inside, even during the winter. In the daytime, sunlight shines into the greenhouse and warms the plants and air inside. At nighttime, it\'s colder outside, but the greenhouse stays pretty warm inside. That\'s because the glass walls of the greenhouse trap the Sun's heat.",
		contentName: 'How does the greenhouse effect work?'
	},
	{
		moduleID: 'RGG123',
		moduleName:'Reduce Greenhouse Gasses',
		pageNumber: 3,
		data:"Human activities are changing Earth\'s natural greenhouse effect. Burning fossil fuels like coal and oil puts more carbon dioxide into our atmosphere.\r\n NASA has observed increases in the amount of carbon dioxide and some other greenhouse gases in our atmosphere. Too much of these greenhouse gases can cause Earth\'s atmosphere to trap more and more heat. This causes Earth to warm up.",
		contentName: 'How are humans impacting the greenhouse effect?'
	},
	{
		moduleID: 'RGG123',
		moduleName:'Reduce Greenhouse Gasses',
		pageNumber: 4,
		data: "Just like a glass greenhouse, Earth\'s greenhouse is also full of plants! Plants can help to balance the greenhouse effect on Earth. All plants — from giant trees to tiny phytoplankton in the ocean — take in carbon dioxide and give off oxygen.\n The ocean also absorbs a lot of excess carbon dioxide in the air. Unfortunately, the increased carbon dioxide in the ocean changes the water, making it more acidic. This is called ocean acidification.\n More acidic water can be harmful to many ocean creatures, such as certain shellfish and coral. Warming oceans — from too many greenhouse gases in the atmosphere — can also be harmful to these organisms. Warmer waters are a main cause of coral bleaching.",
		contentName: 'What reduces the greenhouse effect on Earth?'
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
