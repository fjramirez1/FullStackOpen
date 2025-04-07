import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticsLine = ({ text, value }) => (
  <>
    <td>{text}</td>
    <td>{value}</td>
  </>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <table>
      <tbody>
        <tr>
          <StatisticsLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticsLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticsLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticsLine text="all" value={total} />
        </tr>
        <tr>
          <StatisticsLine text="average" value={average} />
        </tr>
        <tr>
          <StatisticsLine text="positive" value={`${positive} %`} />
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App