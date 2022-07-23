import React from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Card from "../../Components/Card";
import Loader from '../Loader';
const Home = () => {
  return (
    <div className="homeWrapper">
      {/* <Loader/> */}
      <Header/>
      <Card />
      <Footer/>
        
   
    </div>
  )
}

export default Home;