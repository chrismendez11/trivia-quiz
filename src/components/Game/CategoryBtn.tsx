import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCategory } from '../../store/slices/category.slice'
import { Category } from '../../types'

type Props = {
    category: Category,
    color: string
}

const CategoryBtn = ({category, color}: Props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCategory = () => {
      dispatch(setCategory(category.number))
      navigate('/difficulty')
    }

  return (
    <button className='btn-option' onClick={handleCategory} style={{backgroundColor: color}}>{category.name}</button>
  )
}

export default CategoryBtn