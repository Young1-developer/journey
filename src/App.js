import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Days from './pages/Days/Days'
import DaysDetails from './pages/DaysDetails/DaysDetails'
import Layout from './components/Layout'


const App = () => {
  return (
   <BrowserRouter>
  
    <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='days' element={<Days />} />
      <Route path='days/:id' element={<DaysDetails />} />

      </Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App
