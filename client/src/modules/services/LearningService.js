const baseURL = 'http://localhost:3000/api/learningContent/'

export default {
  getAllData (name, page) {
    return fetch(baseURL + name + `/${page}`)
      .then(result => result.json())
      .catch(err => console.error(err))
  }
}
