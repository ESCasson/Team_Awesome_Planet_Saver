const baseURL = 'http://localhost:3000/api/modules/'

export default {
  getModules () {
    return fetch(baseURL)
      .then(res => res.json())
  },
  getModuleList (id) {
    return fetch(baseURL + id)
      .then(result => result.json())
      .catch(err => console.error(err))
  }
}
