import React from 'react'
import Header from '../../Compnents/Header/Header';
import Footer from '../../Compnents/Footer/Footer';
import Banner from "../../Compnents/Banner/Banner";
import RowList from '../../Compnents/Rows/RowList/RowList';


function Home(){
  return (
    <>
    <Header />
    <Banner />
    <RowList />
    <Footer/>
    
    </>
  )
}

export default Home;