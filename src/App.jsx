import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import SwiperContainer from './Component/SwiperContainer'
import SecondPage from './Component/SecondPage'
import ThirdPage from './Component/ThirdPage'
import ForthPage from './Component/ForthPage'
import FifthPage from './Component/FifthPage'
import SixthPage from './Component/SixthPage'

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
      <SixthPage/>
    </div>
  )
}

export default App