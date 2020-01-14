const baseURL = 'http://localhost:3000/api/login'

export default {
	getData (user, pwd) {
		return fetch(`${baseURL}/${user}/${pwd}`)
		.then(result => result.json())
		.catch(err => console.error(err));
	}
};
