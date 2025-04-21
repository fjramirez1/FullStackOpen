import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }
  , [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      find countries <input value={newFilter} onChange={handleFilterChange} />
      <Countries countries={countries?.filter(country => 
        country.name.common.toLowerCase().includes(newFilter.toLowerCase())
      )} />
    </div>
  )
}

export default App