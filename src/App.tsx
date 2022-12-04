import { useState } from 'react'
import api from './api'
import { Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import Home from './components/Home/Home'
import NameRequest from './components/Home/NameRequest'
import Score from './components/Game/Score'
import SelectDifficulty from './components/Game/SelectDifficulty'
import SelectCategory from './components/Game/SelectCategory'
import './sass/css/index.css'
import ProtectedRoutes from './components/Home/ProtectedRoutes'
import QuizGame from './components/Game/QuizGame'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/name' element={<NameRequest />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/category' element={<SelectCategory />}/>
          <Route path='/difficulty' element={<SelectDifficulty />}/>
          <Route path='/quiz' element={<QuizGame />}/>
          <Route path='/score' element={<Score />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
