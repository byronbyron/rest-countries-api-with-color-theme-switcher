import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    const res = await fetch(`https://restcountries.com/v2/all`)
    const data = await res.json()
    await setCountries(data)
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-800 dark:text-white">
      <Header />

      <div className="container mx-auto pb-24">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 px-14 sm:px-4">
          { countries.map( (country, index) => <Link to={{ pathname: 'details', state: country }} key={index}>
            <div>
              <img src={country.flag} alt={country.name} />
              <p><strong>{country.name}</strong></p>
              <p>{country.population}</p>
              <p>{country.region}</p>
              <p>{country.capital}</p>
            </div>
          </Link>) }
        </div>
      </div>
    </div>
  )
}
