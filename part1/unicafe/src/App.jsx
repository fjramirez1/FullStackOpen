import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({text, value}) => (
  <div>
    {text} {value}
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = (...numbers) => {
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    return sum / numbers.length
  }

  const positive = () => {
    const all = good + neutral + bad
    return all === 0 ? 0 : (good / all) * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={good + neutral + bad} />
      <Statistic text="average" value={average(good, neutral, bad)} />
      <Statistic text="positive" value={`${positive()} %`} />
    </div>
  )
}

export default App