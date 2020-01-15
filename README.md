# Planet Saver
> A modular educational app

Planet Saver provides an expandable template to deliver interactive and bespoke content for any level of education.

### Requirements

Requires MongoDB, NodeJS, and VueJS to run

### Install

```
git clone git@github.com:ESCassonTeam_Awesome_Planet_Saver.git

cd client
npm install
npm run serve

cd ..

cd server
npm run seeds
npm run server:dev
```

### Examples

> Add Content

To add content, navigate to the `server/db/seeds.js`

Then locate the `learningContent` section and add the following:

```
{
	moduleID: '',
	moduleName:'',
	pageNumber: ,
	data:"",
	contentName: ''
}
```
Example:

```
{
	moduleID: 'MT123',
	moduleName:'Mathematically Theory',
	pageNumber: 1,
	data:"Mathematicians seek and use patterns to formulate new conjectures; they resolve the truth or falsity of conjectures by mathematical proof. When mathematical structures are good models of real phenomena, mathematical reasoning can be used to provide insight or predictions about nature. Through the use of abstraction and logic, mathematics developed from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects. Practical mathematics has been a human activity from as far back as written records exist. The research required to solve mathematical problems can take years or even centuries of sustained inquiry.",
	contentName: 'What is Maths?'
}
```

### License
MIT
