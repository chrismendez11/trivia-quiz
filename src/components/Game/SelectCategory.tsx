import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import api from '../../api'
import {Category} from '../../types'
import CategoryBtn from './CategoryBtn'

const SelectCategory = () => {

  const name = useSelector((state: RootState) => state.username)
  const colors = ["#0466c8", "#52b788", "#ffd60a", "#ba181b"]

  return (
    <div className='category__page'>
      <div>
        <h2>Player: <span>{name}</span></h2>
      </div>
      <section>
        <h2>TRIVIA QUIZ</h2>
        <p>Select the category for the quiz</p>
        <div className='categories-options__container'>  
          {api.categories.map((category: Category, index) => (
            <CategoryBtn key={index} category={category} color={colors[index]}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default SelectCategory