const baseURL = 'http://localhost:3000/api/learning/'

export default {
  getModuleList (id) {
    return fetch(baseURL + id)
      .then(result => result.json())
      .catch(err => console.error(err))
  }
}
