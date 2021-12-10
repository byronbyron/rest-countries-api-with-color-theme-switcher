import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      setDarkMode(current => current = !current)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(current => current = !current)
    }
  }

  return (
    <header className="shadow-md py-6 bg-white dark:bg-gray-700 dark:text-white mb-6 sm:mb-12">
      <div className="container mx-auto flex items-center px-4">
        <h1 className="font-bold text-xl sm:text-2xl">
          <Link to="/">Where in the world?</Link>
        </h1>

        <div className="ml-auto font-medium">
          <button onClick={() => toggleDarkMode()}>
            <i className="far fa-moon" aria-hidden="true"></i><span className="font-semibold ml-2">Dark Mode</span>
          </button>
        </div>
      </div>
    </header>
  )
}
