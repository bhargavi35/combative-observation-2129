import  Slider  from '../../Components/Slider';
import React from 'react'
import Card from '../../Components/Card';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header'

import Loader from '../../Components/Loader';
const Home = () => {
  return (
    <div className="homeWrapper">
        <Loader />
        <Header/>
        {/* <Slider/> */}
        <Card/>
        <Footer/>
   
    </div>
  )
}

export default Home;