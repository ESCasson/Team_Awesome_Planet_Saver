use planetsaver;
db.dropDatabase();

db.modules.insertMany([
  {
    module_id: 01,
    name: "Module One"
  },
  {
    id: 02,
    name: "Module Two"
  },
  {
    id: 03,
    name: "Module Three"
  }
]);

db.student.insertMany([
  {
    student_id: 1,
    name: "Jim Beam",
  },
  {
    student_id: 2,
    name: "Jack Daniels",
  },
  {
    student_id: 3,
    name: "Johnny Walker",
  }
]);
