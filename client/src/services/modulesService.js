const baseURL = 'http://localhost:3000/api/modules/'

export default {
  getModules(){
    return fetch(baseURL)
    .then(res => res.json())
  },
}
