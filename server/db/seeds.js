use planetsaver;
db.dropDatabase();

db.quizQuestions.insertMany([
  { module_id: 2,
    questions:[
      { number: 1,
      question: "What is 1?",
      options: {
        1: "1",
        2: "2",
        3: "3"
      },
      correct_answer: 1
    },
    {number: 2,
      question: "What is 2?",
      options: {
        1: "1",
        2: "2",
        3: "3"
      },
      correct_answer: 2
    },
      {number: 3,
      question: "What is 3?",
      options: {
        1: "1",
        2: "2",
        3: "3"
      },
      correct_answer: 3
    }
],
    pass_mark: 2
  },
  { module_id: 1,
    questions:[
      { number: 1,
      question: "What is A?",
      options: {
        1: "A",
        2: "B",
        3: "C"
      },
      correct_answer: 1
    },
    {number: 2,
      question: "What is B?",
      options: {
        1: "A",
        2: "B",
        3: "C"
      },
      correct_answer: 2
    },
      {number: 3,
      question: "What is C?",
      options: {
        1: "A",
        2: "B",
        3: "C"
      },
      correct_answer: 3
    }
],
    pass_mark: 2
  }
]);

db.student.insertMany([
  {
    student_id: 1,
  },
  {
    student_id: 2,
  }
]);
