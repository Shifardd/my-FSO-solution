import axios from "axios"
import { useEffect, useState } from "react"
import List from "./components/List"

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(()=> {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  let handleInput = (event) => {
    let newValue = event.target.value
    setValue(newValue)
  }

  let filtered = countries.filter(c => c.name.common.toLowerCase().includes(value.toLowerCase()))

  return (
    <div>
      find countries <input value={value} onChange={handleInput} />
      <div>
        {
          <List filtered={filtered} />
        }
      </div>
    </div>
  )
}



export default App 