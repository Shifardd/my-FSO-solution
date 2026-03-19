const List = ({filtered}) => {
  let flagStyle = {
    fontSize: 200
  }

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
        <div style={flagStyle}>{filtered[0].flag}</div>
      </>
      
    )
  }

  return (
    filtered.map(country => <div>{country.name.common}</div>)
  )
}

export default List