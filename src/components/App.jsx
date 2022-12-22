import React from 'react'
import AboutUs from './About/AboutUs';
import AddFighter from './fighters/AddFighter';
import Footer from './Footer/Footer';
import YandexMap from './YandexMap/YandexMap';
 
 
const App = () => {
  return (
    <div>
        <AboutUs/>
      <YandexMap/>
      <AddFighter/>
    <Footer/>
    </div>
  )
}
export default App