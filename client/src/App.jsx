import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesDashboard from './components/ServicesDashboard';
import ApplicationTracking from './components/ApplicationTracking';
import DownloadsResources from './components/DownloadsResources';
import HelpForm from './components/HelpForm';
import Footer from './components/Footer';
// import Stats from './components/Stats'; 


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesDashboard/>
      <ApplicationTracking />
      <DownloadsResources/>
      <HelpForm/>
      <Footer/>
    </div>
  )
}

export default App