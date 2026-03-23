import { useEffect, useState } from "react"
import List from "./components/List"
import countriesService from './services/countries'
import weatherService from './services/weather'

const App = () => {
  const [value, setValue] = useState('')
  const [countryData, setCountryData] = useState(null)
  const [country, setCountry] = useState(null)
  const [listOfCountries, setListOfCountries] = useState([]) 

  useEffect(() => {
    countriesService.getAll()
    .then(allCountries => {
      let countries = allCountries.map(country => country.name.common)
      setListOfCountries(countries)
    })
  }, [])  // list of countries name

  useEffect(()=> {
    if(country) {
      countriesService.getSpecific(country)
      .then(returnedData => {
        let dataObject = {
          name: returnedData.name.common,
          capital: returnedData.capital[0],
          area: returnedData.area,
          languages: returnedData.languages,
          flags: returnedData.flags
        }

        let api_key = import.meta.env.VITE_API_KEY
        let [lat, long] = returnedData.latlng
        weatherService.getWeather(lat, long, api_key)
        .then(returnedWeatherData => {
          let icon = returnedWeatherData.weather[0].icon

          let weatherData = {
            temp: returnedWeatherData.main.temp,
            icon: `https://openweathermap.org/payload/api/media/file/${icon}.png`,
            main: returnedWeatherData.weather[0].main,
            wind: returnedWeatherData.wind.speed
          }
          
          setCountryData({...dataObject, ...weatherData})
        })

      })
    }
  },[country])  // For country data

const handleInput = (event) => {
  const newValue = event.target.value
  setValue(newValue)

  const newFilter = listOfCountries.filter(c => {
    return c.toLowerCase().includes(newValue.toLowerCase())
  }) 

  if (newFilter.length == 1) {
    let selected = newFilter[0]
    if(selected != country) {
      setCountry(selected)
    }
  } else {
    setCountryData(null)
    setCountry(null)
  }
}


  let filtered = listOfCountries.filter(c => {
    return c.toLowerCase().includes(value.toLowerCase())
  })   // filter name of country
  

  let showIt = (country) => {
    setValue(country);
    setCountry(country);    
  }

  return (
    <div>
      find countries <input value={value} onChange={handleInput} />
      <div>
        {
          <List filtered={filtered} onClick={showIt} data={countryData} />
        }
      </div>
    </div>
  )  
}

export default App