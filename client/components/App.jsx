import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import AboutUs from './AboutUs'
import Tour from './Tour'
import AllTours from './AllTours'

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
      <div>
      </div>
      <AllTours/>
      <div><h3>Just need a break in here!</h3></div>
      <Tour/>
    </>
  )
}

export default App