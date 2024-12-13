// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Category from './componets/Category/Category'
import Category2 from './componets/Category/Category2'
import Services from './componets/Services/Services'
const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar/> 
      <Category />
      <Category2 />
      <Services />
    </div> 
  )
}

export default App