import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Favorits from './pages/Favorits.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={Home}/>
          <Route path='movie/:id' element={Movie}/> #id dinamico
          <Route path='/search' element={Search}/>
          <Route path='/favorits' element={Favorits}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
