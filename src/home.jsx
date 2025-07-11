import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import CategorySection from './components/CategorySection'

function Home() {
  return (
    <div>
      {/* Header*/}
      <Header />
      {/*Hero Section*/}
      <Hero />
      {/*Category*/}
      <CategorySection />
      {/*Most Searched Car*/}
      <MostSearchedCar />
      {/*Info Section*/}
      <InfoSection />
      {/*Footer Section*/}
      <Footer/>
    </div>
  )
}

export default Home