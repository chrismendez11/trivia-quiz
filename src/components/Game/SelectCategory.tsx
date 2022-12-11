import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import api from '../../api'
import {Category} from '../../types'
import CategoryBtn from './CategoryBtn'

const SelectCategory = () => {

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
        <p>Select the <span>category</span> for the quiz</p>
        <div className='categories-btns__container'>  
          {api.categories.map((category: Category, index) => (
            <CategoryBtn key={index} category={category} color={colors[index]}/>
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}

export default SelectCategory