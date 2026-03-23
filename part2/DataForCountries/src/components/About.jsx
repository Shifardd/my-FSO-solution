const About = ({data}) => {
  return (
    <>
      <p>
        Capital {data.capital}
      </p>
      <p>
        Area {data.area}
      </p>
    </>
  )
}

export default About