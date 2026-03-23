import Image from "./Image"

const Weather = ({temp, src, alt, wind}) => {
  return (
    <div>
      <p>Temperature {temp} Celsius</p>
      <Image src={src} alt={alt} />
      <p>Wind {wind} m/s</p>
    </div>
  )
}

export default Weather