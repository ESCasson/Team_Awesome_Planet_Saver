const baseURL = 'http://localhost:3000/api/modules'

export default {
  getAllData () {
    return fetch(baseURL)
      .then(result => result.json())
      .catch(err => console.error(err))
  }
}
