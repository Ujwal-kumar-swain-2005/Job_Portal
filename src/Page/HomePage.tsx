import React from 'react'
import Header from '../Header/Header'
import DreamJob from '../LandingPage/DreamJob'
import Companies from '../LandingPage/Companies'
import JobCategory from '../LandingPage/JobCategory'
import Working from '../LandingPage/Working'
import Testinomial from '../LandingPage/Testinomial'
import Subscibe from '../LandingPage/Subscibe'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
  <div className='min-h-[100vh] bg-mine-shaft-950'>
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory/>
      <Working/>
      <Testinomial/>
      <Subscibe/>
      <Footer/>
    </div>
  )
}

export default HomePage
