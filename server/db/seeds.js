use planetsaver;
db.dropDatabase();

db.quizQuestions.insertMany([
  {
    quizQuestion_id: 1,
    module_id: 1,
    question: "What is A?",
    options: {
      1: "A",
      2: "B",
      3: "C"
    },
    correct_answer: 1
  },
  {
    quizQuestion_id: 2,
    module_id: 1,
    question: "What is B?",
    options: {
      1: "A",
      2: "B",
      3: "C"
    },
    correct_answer: 2
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
