import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import PageCTA from './components/PageCTA'
import Footer from './components/Footer'

import './App.css'

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      <PageCTA />
      <Footer />
    </>
  )
}

export default App
