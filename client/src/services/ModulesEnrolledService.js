const baseURL = 'http://localhost:3000/api/enrolledModules/'

export default {
  getCompletedPages (studentID, moduleID) {
    return fetch(`${baseURL}${studentID}/${moduleID}`)
      .then(result => result.json())
      .catch(err => console.error(err))
  }
}
