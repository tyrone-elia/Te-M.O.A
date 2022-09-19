import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import AboutUs from './AboutUs'
import Tour from './Tour'
import Tour1 from './Tour1'
import Tour2 from './Tour2'
import Tour3 from './Tour3'

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
      <div className="grid-container">
        <div><Tour1/></div>
        <div><Tour2/></div>
        <div><Tour3/></div>
      </div>
      <Tour/>
    </>
  )
}

export default App
