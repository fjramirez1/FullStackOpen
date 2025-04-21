import React, { useState, useEffect } from "react"
import Country from "./Country"

const Countries = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    setSelectedCountry(null)
  }, [countries])

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (selectedCountry) {
    return <Country country={selectedCountry} />
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {country.name.common}{" "}
            <button onClick={() => setSelectedCountry(country)}>show</button>
          </li>
        ))}
      </ul>
    )
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }

  return null
}

export default Countries
