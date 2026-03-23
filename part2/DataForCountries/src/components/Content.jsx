import About from "./About"
import Languages from "./Language"
import Image from "./Image"
import Weather from "./Weather"

const Content = ({filtered, onClick, data}) => {
  
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
          <About data={data} />
          <h2>Languages</h2>
          <Languages languages={languages} />
          <Image src={data.flags.svg} alt={data.flags.alt} />
          <h2>Weather in {data.name}</h2>
          <Weather temp={data.temp} src={data.icon} alt={data.main} wind={data.wind} />
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

export default Content