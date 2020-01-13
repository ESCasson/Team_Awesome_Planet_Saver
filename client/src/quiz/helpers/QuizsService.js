const baseURL = 'http://localhost:3000/api/quizQuestions/'

export default {
  getQuizs(){
    return fetch(baseURL)
    .then(res => res.json())
  },

}
