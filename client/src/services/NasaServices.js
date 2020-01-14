const baseURL = 'https://api.nasa.gov/planetary/apod?api_key='

export default {
	getAOP () {
		return fetch(baseURL + process.env.VUE_APP_NASA)
		.then(result => result.json())
		.catch(err => console.error(err))
	}
}
