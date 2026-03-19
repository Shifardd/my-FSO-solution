const List = ({filtered}) => {
  if(filtered.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } 

  return (
    filtered.map(country => <div>{country.name.common}</div>)
  )
}

export default List