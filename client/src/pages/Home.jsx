import React from 'react'
import Announmouse from '../components/Layout/Announmouse'
import Categories from '../components/Home/Categories'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
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
