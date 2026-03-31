import axios from 'axios'
import './App.css'
import Counter from './Components/Counter/Counter'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/NavBar'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import HowItWorks from './Components/HowItWorks/HowItWorks'
import Pricing from './Components/Pricing/Pricing'
import Newsletter from './Components/Newsletter/Newsletter'
import Footer from './Components/Footer/Footer'


const digiToolsFetch = axios.get("digitools.json")

const pricingPromise = axios.get("pricingData.json")

function App() {
  
  const [cart,setCart]= useState([])

  return (
    <>
    <nav>
      <NavBar cart={cart} setCart={setCart}/>
    </nav>
    <header>
      <Header />
    </header>
    {/* counter */}
      <Counter/>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <DigitalTools cart={cart} setCart={setCart} digiToolsFetch={digiToolsFetch}/>
      </Suspense>
      <HowItWorks/>

    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <Pricing pricingPromise={pricingPromise}/>
    </Suspense>

<Newsletter/>
<Footer/>


    <ToastContainer />
    </>
    
  )
}

export default App
