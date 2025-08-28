import React from 'react'
import HomeHero from "../Components/HomeHero"
import HomeFuture from "../Components/HomeFuture"
import HomeForecasts from "../Components/HomeForecasts"
import HomeServices from '../Components/HomeServices'
import PopularProducts from '../Components/HomeProducts'
import HomeArticles from "../Components/HomeArticles"
import HomeTestimonials from "../Components/HomeTestimonial"
const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeFuture/>
      <HomeForecasts/>
      <HomeServices/>
      <PopularProducts/>
      <HomeArticles/>
      <HomeTestimonials/>
    </div>
  )
}

export default Home
