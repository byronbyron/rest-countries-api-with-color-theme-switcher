import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import CountryItem from '../components/CountryItem'

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
            <CountryItem
              title={country.name}
              image_url={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>) }
        </div>
      </div>
    </div>
  )
}
