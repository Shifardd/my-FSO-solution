const Total = ({parts}) => {
  let allExercises = parts.map(part=> part.exercises)
  let total = allExercises.reduce((total, item) => total + item, 0)
  
  return (
    <strong> 
      total of {total} exercises
    </strong>
  )
}

export default Total