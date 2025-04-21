import React from "react";
import { useState, useEffect } from "react";

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    if (countries.length > 1) {
        return (
          <ul>
            {countries.map((country, index) => (
              <li key={index}>{country.name.common}</li>
            ))}
          </ul>
        )
    }
    if (countries.length === 1) {
        const country = countries[0]
        return (
          <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
              {Object.values(country.languages).map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="200" />
          </div>
        )
    }
    return null
}

export default Countries