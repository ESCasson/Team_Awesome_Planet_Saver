use planetsave;
db.dropDatabase();

db.modules.insertMany([
  {
    module_id: 01,
    name: "Module One"
  },
  {
    module_id: 02,
    name: "Module Two"
  },
  {
    module_id: 03,
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

db.learningContent.insertMany([
	{
		moduleID: 01,
		pageNumber: 1,
		data: 'hi',
		contentName: 'Hello World'
	},
	{
		moduleID: 01,
		pageNumber: 2,
		data: 'hi',
		contentName: 'Goodbye World'
	},
	{
		moduleID: 01,
		pageNumber: 3,
		data: 'hi',
		contentName: 'Hello Again'
	},
]);
