import React from 'react'
import { useSelector } from 'react-redux'
import api from '../../api'
import { RootState } from '../../store'
import { Difficulty } from '../../types'
import DifficultyBtn from './DifficultyBtn'

const SelectDifficulty = () => {

  const name = useSelector((state: RootState) => state.username)
  const colors = ["#0466c8", "#52b788", "#ffd60a", "#ba181b"]

  return (
    <div className='difficulty__page'>
    <div>
      <h2>Player: <span>{name}</span></h2>
    </div>
    <section>
      <h2>TRIVIA QUIZ</h2>
      <p>Select the difficulty for the quiz</p>
      <div className='difficulty-options__container'>  
        {api.difficulties.map((difficulty: Difficulty, index) => (
          <DifficultyBtn key={index} difficulty={difficulty} color={colors[index]}/>
        ))}
      </div>
    </section>
  </div>
  )
}

export default SelectDifficulty