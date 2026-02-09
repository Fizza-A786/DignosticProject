import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import SwiperContainer from './Component/SwiperContainer'
import SecondPage from './Component/SecondPage'
import ThirdPage from './Component/ThirdPage'
import ForthPage from './Component/ForthPage'
import FifthPage from './Component/FifthPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SwiperContainer/>
      <SecondPage/>
      <ThirdPage/>
      < ForthPage/>
      < FifthPage/>
    </div>
  )
}

export default App