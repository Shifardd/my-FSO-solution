const Content = ({parts}) => {
  return (
    <>
      {
        parts.map(item => <Part key={item.id} part={item} />)
      }
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}


export default Content