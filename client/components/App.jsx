import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import AboutUs from './AboutUs'
import Tour from './Tour'

import { fetchFruits } from '../actions'

function App() {
  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      
        <Header/>
        
        <AboutUs/>
        <div className="app">  
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <div>
        <Tour/>
        </div>
      </div>
    </>
  )
}

export default App
