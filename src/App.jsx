import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Club from './pages/Club'
import Pnf from './pages/Pnf'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'


function App() {
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true)
    }, 5400)
  })

  return (
    <>
    <Routes>
      <Route path='' element={isLoading ? <Home /> : <Preloader />}></Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/joinclub' element={<Club/>}/>
      <Route path='*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
