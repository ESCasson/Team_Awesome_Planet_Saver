const baseURL = 'http://localhost:3000/api/students/'

export default {

  getData(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postStudentsResults(results){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(results),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(result => result.json())
    .catch(error => console.error(error))
  }

}
