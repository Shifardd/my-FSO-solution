const Languages = ({languages}) => {
  return (
    <>
      <ul>
        {languages.map(lang => <li>{lang}</li>)}
      </ul>
    </>
  )
}

export default Languages