import { useEffect, useState } from "react"
import List from "./components/List"
import countriesService from './services/countries'

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(()=> {
    if(!countries) {
      countriesService.getAll()
      .then(countries => setCountries(countries))
    }
  },[countries])

  if(!countries) {
    return null
  }

  let handleInput = (event) => {
    let newValue = event.target.value
    setValue(newValue)
  }

  let filtered = countries.filter(c => c.name.common.toLowerCase().includes(value.toLowerCase()))  

  let showIt = (country) => {
    setValue(country.name.common);    
  }


  return (
    <div>
      find countries <input value={value} onChange={handleInput} />
      <div>
        {
          <List filtered={filtered} onClick={showIt} />
        }
      </div>
    </div>
  )
}



export default App 