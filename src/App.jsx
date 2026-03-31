import axios from 'axios'
import './App.css'
import Counter from './Components/Counter/Counter'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/NavBar'
import { Suspense } from 'react'

const digiToolsFetch = axios.get("digitools.json")

function App() {
  

  return (
    <>
    <nav>
      <NavBar/>
    </nav>
    <header>
      <Header/>
    </header>
    {/* counter */}
      <Counter/>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <DigitalTools digiToolsFetch={digiToolsFetch}/>
      </Suspense>
    </>
  )
}

export default App
