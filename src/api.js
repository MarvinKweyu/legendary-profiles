import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'


const instance = axios.create({
  baseURL: 'https://api.github.com',
  // pass an adapter to allow use of axios with nock
  // let nock intercept requests
  adapter: httpAdapter,
})

export default {
    searchUser(username) {
    return instance
      .get(`/users/${username}`)
      .then(result => result.data)
      .catch(error => console.log(error))
  }
}