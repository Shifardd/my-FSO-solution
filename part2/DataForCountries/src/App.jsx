import { useEffect, useState } from "react"
import List from "./components/List"
import countriesService from './services/countries'
import axios from "axios"

const App = () => {
  const [value, setValue] = useState('')
  const [countryData, setCountryData] = useState(null)
  const [country, setCountry] = useState(null)
  const [listOfCountries, setListOfCountries] = useState([]) 

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      let countries = response.data.map(country => country.name.common)
      setListOfCountries(countries)
    })
  }, [])  // list of countries name

  useEffect(()=> {
    if(country) {
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(response => {
        let dataObject = {
          name: response.data.name.common,
          capital: response.data.capital[0],
          area: response.data.area,
          languages: response.data.languages,
          flags: response.data.flags
        }
        setCountryData(dataObject)
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