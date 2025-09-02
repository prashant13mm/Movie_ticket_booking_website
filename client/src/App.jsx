//maine rafce write kiya toh first get the structure
import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/movies'
import Moviedetails from './pages/moviedetails'
import Seatlayout from './pages/seatlayout'
import Mybookings from './pages/mybookings'
import {Toaster} from  'react-hot-toast'
import Footer from './components/footer'
import Fav from './pages/fav'
const App = () => {
  const isadminr=useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isadminr && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<Moviedetails/>}/>
        <Route path='/movies/:id/:date' element={<Seatlayout/>}/>
        <Route path='/my-bookings' element={<Mybookings/>}/>
        <Route path='/fav' element={<Fav/>}/>
      </Routes>
      {!isadminr && <Footer/>}

    </>
  )
}

export default App
