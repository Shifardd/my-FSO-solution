import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = good / total * 100;

  const handleClicks = (text) => () => {
    if (text === "good") {
      setGood(good + 1)
    } else if (text === "neutral") {
      setNeutral(neutral + 1) 
    } else if (text === "bad") {
      setBad(bad + 1)
    }
  } 

  return (
    <div>
      <SubTitle title="give feedback" />
      <Button onClick={handleClicks("good")} text="Good" />
      <Button onClick={handleClicks("neutral")} text="Neutral" />
      <Button onClick={handleClicks("bad")} text="Bad" />
      <SubTitle title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average} positive={positive} />
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine name="good" value={props.good} />
      <StatisticLine name="neutral" value={props.neutral} />
      <StatisticLine name="bad" value={props.bad} />
      <StatisticLine name="all" value={props.average} />
      <StatisticLine name="positive" value={props.positive + '%'} />
    </div>
  )
}

const StatisticLine = ({name, value}) => {
  return (
    <p>{name} {value}</p>
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


export default App