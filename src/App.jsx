import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import SwiperContainer from './Component/SwiperContainer'
import SecondPage from './Component/SecondPage'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SwiperContainer/>
      <SecondPage/>
    </div>
  )
}

export default App