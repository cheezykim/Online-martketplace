/* eslint-disable react-hooks/rules-of-hooks */
 
import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Hero from './componets/Hero/Hero';
import Category from './componets/Category/Category'
import Category2 from './componets/Category/Category2'
import Services from './componets/Services/Services'
import Banner from './componets/Banner/Banner'

import headphone from './assets/hero/headphone.png'
import Products from './componets/Products/Products'
import Blogs from './componets/Blogs/Blogs';
import Footer from './componets/Footer/Footer';

const BannerData = {  
  discount: "30% OFF",
  title: "Fine smile",
  date: "20 jan to 30 jan",
  image: headphone,
  title2: "air solo bass",
  title3: "summer sale",
  title4: "lorem ipsum",
  bgcolor: "#f42c37"  // red color 
}

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products/> 
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
