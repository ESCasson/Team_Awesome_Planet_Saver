const baseURL = 'http://localhost:3000/api/learningContent/'

export default {
	getList (id) {
		return fetch(baseURL + id)
		.then(result => result.json())
		.catch(err => console.error(err))
	}
}
