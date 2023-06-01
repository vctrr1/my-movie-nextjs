import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Favorits from './pages/Favorits.jsx'
import Sobre from './pages/Sobre'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path='search' element={<Search/>}/>
          <Route path='favorits' element={<Favorits/>}/>
          <Route path='sobre' element={<Sobre/>}/>
        </Route>
      </Routes>
      <Outlet />
    </BrowserRouter>
    </React.StrictMode>
);
