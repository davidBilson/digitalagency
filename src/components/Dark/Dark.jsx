import React from 'react'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Keyword from '../KeyWord/Keyword'
import MileStones from '../MileStone/MileStones'
import PortfolioOne from '../PortfolioOne/PortfolioOne'
import Service from '../Services/Service'
import './Dark.css'

const Dark = () => {
  return (
    <div className='dark-container'>
    <MileStones />
    <Keyword />
    <Service />
    <PortfolioOne />
    <Contact />
    <Footer />
    </div>
  )
}

export default Dark