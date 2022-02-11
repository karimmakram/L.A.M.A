import React from 'react'
import Announmouse from '../components/Home/Announmouse'
import Categories from '../components/Home/Categories'
import Footer from '../components/Home/Footer'
import Navbar from '../components/Home/Navbar'
import NewsLetter from '../components/Home/NewsLetter'
import Products from '../components/Home/Products'
import Slider from '../components/Home/Slider'

const Home = () => {
  return (
    <div>
      <Announmouse />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
