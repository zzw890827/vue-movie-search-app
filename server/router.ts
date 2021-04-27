const axios = require('axios')

function get (url: string) {
  return axios.get(url)
}
