import React from 'react'
import Announmouse from '../components/Home/Announmouse'
import Categories from '../components/Home/Categories'
import Navbar from '../components/Home/Navbar'
import Slider from '../components/Home/Slider'

const Home = () => {
  return (
    <div>
      <Announmouse />
      <Navbar />
      <Slider />
      <Categories/>
    </div>
  )
}

export default Home
