import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AboutUs from './AboutUs'
import { fetchFruits } from '../actions'

function App() {
  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className="app">
        <h1>Te Mauri Ora Adventures</h1>
        
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <div>
        <AboutUs/>
        </div>
      </div>
    </>
  )
}

export default App
