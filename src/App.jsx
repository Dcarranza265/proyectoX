import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/navbar/NavigationBar'
import ContactoPage from './pages/contacto/ContactoPage'
import HomePage from './pages/home/HomePage'
import NosotrosPage from './pages/nosotros/NosotrosPage'
import MarketingPage from './pages/marketing/MarketingPage'
import DiseñoPage from './pages/diseño/DiseñoPage'
import Footer from './components/footer/Footer'
import ScrollToTop from './hooks/ScrollToTop'
const App = () => {  
  return (    
    <>    
    <BrowserRouter>
    <ScrollToTop/>
        <Routes>
            <Route path='/' element={<NavigationBar/>}>
                <Route index element={<HomePage/>}></Route>
                <Route path='nosotros' element={<NosotrosPage/>}></Route>
                <Route path='contacto' element={<ContactoPage/>}></Route>
                <Route path='marketing' element={<MarketingPage/>}></Route>
                <Route path='diseño' element={<DiseñoPage/>}></Route>
            </Route>
            
        </Routes>  
    </BrowserRouter>
    <Footer></Footer>
    </>
  )
}

export default App