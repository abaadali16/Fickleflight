import React from 'react'
import Navbar from '../components/Navbar' 
import Herosection from '../components/Herosection'
import Searchflights from '../components/Searchflights' 
import Recent from '../components/Recent'
import Destinations from '../components/Destinations'
import Recomended from '../components/Recomended'
import Popular from '../components/Popular'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Recent/>
      <Destinations/>
      <Recomended/>
      <Popular/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default Home
