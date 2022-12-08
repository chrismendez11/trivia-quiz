import React from 'react'
import { useSelector } from 'react-redux'
import api from '../../api'
import { RootState } from '../../store'
import { Difficulty } from '../../types'
import DifficultyBtn from './DifficultyBtn'

const SelectDifficulty = () => {

  const name = useSelector((state: RootState) => state.username)
  const colors = ["#ba181b", "#0466c8", "#52b788", "#ffd60a"]

  return (
    <div className='category__page'>
      <div className='category__content'>
        <div className='playerName__container'>
          <h2>Player: <span>{name}</span></h2>
        </div>
        <section className='category-options__container'>
        <h2>TRIVIA QUIZ</h2>
        <div className='category-img__container'><img src="https://www.triviamaker.com/TriviaMaker/Theme/v4/WOF/wheellogo.png" alt="" /></div>
        <p>Select the difficulty for the quiz</p>
        <div className='categories-btns__container'>  
          {api.difficulties.map((difficulty: Difficulty, index) => (
            <DifficultyBtn key={index} difficulty={difficulty} color={colors[index]}/>
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}

export default SelectDifficulty


