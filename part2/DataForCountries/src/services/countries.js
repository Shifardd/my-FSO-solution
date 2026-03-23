import axios from "axios";

const allURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const specificURL = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAll = () => {
  const request = axios.get(allURL)
  return request.then(response => response.data)
}

const getSpecific = (name) => {
  const request = axios.get(`${specificURL}/${name}`)
  return request.then(response => response.data)
}

export default {getAll , getSpecific}