const Course = ({course}) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {
        course.map(item => (
          <div>
            <Header key={item.id} name={item.name} />
            <Content parts={item.parts} />
            <Total parts={item.parts} />
          </div>
        ))
      }
    </>
  )
}

const Header = ({name}) => {
  return (
    <h2>
      {name}
    </h2>
  )
}

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

const Total = ({parts}) => {
  let allExercises = parts.map(part=> part.exercises)
  let total = allExercises.reduce((total, item) => total + item, 0)
  
  return (
    <strong> 
      total of {total} exercises
    </strong>
  )
}

export default Course