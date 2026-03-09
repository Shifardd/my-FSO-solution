const Total = ({parts}) => {
  let sum = 0
  for(let i = 0; i < parts.length; i++) {
    sum += parts[i].exercises
  }  
  
  return (
    <strong>total of {sum} exercises</strong>
  )
}

export default Total