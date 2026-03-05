import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    let updatedGood = good + 1
    setGood(updatedGood)
    let updatedTotal = updatedGood + neutral + bad 
    setAll(updatedTotal)
    setAverage((updatedGood - bad)/updatedTotal)
    setPositive(updatedGood / updatedTotal * 100)
  }
    
  const handleNeutral = () => {
    let updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    let updatedTotal = good + updatedNeutral + bad 
    setAll(good + updatedNeutral + bad)
    setAverage((good - bad)/updatedTotal)
    setPositive(good / updatedTotal * 100)
  }
  const handleBad = () => {
    let updatedBad = bad + 1
    setBad(updatedBad)
    let updatedTotal = good + neutral + updatedBad
    setAll(good + neutral + updatedBad)
    setAverage((good - updatedBad)/updatedTotal)
    setPositive(good / updatedTotal * 100)
  }


  return (
    <div>
      <SubTitle title="give feedback" />
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <SubTitle title="statistics" />
      <TheValue name="good" value={good} />
      <TheValue name="neutral" value={neutral} />
      <TheValue name="bad" value={bad} />
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const SubTitle = ({title}) => {
  return (
    <h2>
      {title}
    </h2>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const TheValue = ({name, value}) => {
  return (
    <p>{name} {value}</p>
  )
}

export default App