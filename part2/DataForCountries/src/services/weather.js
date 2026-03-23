import axios from "axios";

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'

const getWeather = (lat,long,key) => {
  const request = axios.get(`${weatherURL}&&lat=${lat}&&lon=${long}&&appid=${key}`)
  return request.then(response => response.data)
}

export default {getWeather}