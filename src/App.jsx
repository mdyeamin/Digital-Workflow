import axios from 'axios'
import './App.css'
import Counter from './Components/Counter/Counter'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/NavBar'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'


const digiToolsFetch = axios.get("digitools.json")

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
    <ToastContainer />
    </>
    
  )
}

export default App
