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
      <Statistics name="statistics" good={good} neutral={neutral} bad={bad} all={total} average={average} positive={positive} />
    </div>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>{props.name}</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
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


export default App