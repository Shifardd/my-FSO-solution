const List = ({filtered, onClick, data}) => {
  
  if(filtered.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } 
  else if (filtered.length == 1) {
    if (data !== null && typeof data !== 'undefined') {
      let languages = Object.values(data.languages)
      return (
        <>
          <h1>{data.name}</h1>
          <div>Capital {data.capital}</div>
          <div>Area {data.area}</div>
          <h2>Languages</h2>
          <ul> 
            {languages.map(lang => <li>{lang}</li>)}
          </ul>
          <img height="200" src={`${data.flags.svg}`} alt={`${data.flags.alt}`} />
          <h2>Weather in {data.name}</h2>
          <p>Temperature {data.temp} Celsius</p>
          <p>Wind {data.wind} m/s</p>
        </>
      )
    }

  }

  return (
    filtered.map(country => 
    <div>
      {country} <button onClick={() => onClick(country)}>Show</button>
    </div>)
  )
}

export default List