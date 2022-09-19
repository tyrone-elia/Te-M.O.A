import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import AboutUs from './AboutUs'
import Tour from './Tour'

import { fetchTours } from '../actions'

function App() {
  const tours = useSelector((state) => state.tours)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTours())
  }, [])

  return (
    <>
        <Header/>
        <AboutUs/>
        <div className="app">  
        <ul>
          {tours.map((tour) => (
            <li key={tour}>{tour}</li>
          ))}
        </ul>
      </div>
      <Tour/>
    </>
  )
}

export default App
