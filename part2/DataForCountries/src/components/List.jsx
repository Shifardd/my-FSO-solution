const List = ({filtered, onClick}) => {
  if(filtered.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } 
  else if (filtered.length == 1) {
    let languages = Object.values(filtered[0].languages)

    return (
      <>
        <h1>{filtered[0].name.common}</h1>
        <div>Capital {filtered[0].capital}</div>
        <div>Area {filtered[0].area}</div>
        <h2>Languages</h2>
        <ul> 
          {languages.map(lang => <li>{lang}</li>)}
        </ul>
        <img height="200" src={`${filtered[0].flags.svg}`} alt={`${filtered[0].flags.alt}`} />
      </>
    )
  }

  return (
    filtered.map(country => 
    <div>
      {country.name.common} <button onClick={() => onClick(country)}>Show</button>
    </div>)
  )
}

export default List