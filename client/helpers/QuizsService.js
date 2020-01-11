const baseURL = 'http://localhost:3000/api/quiz/'

export default {
  getQuizs(){
    return fetch(baseURL)
    .then(res => res.json())
  },

}
