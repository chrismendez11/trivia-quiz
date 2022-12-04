import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setDifficulty } from '../../store/slices/difficulty.slice'

type Props = {
    difficulty: string,
    color: string
}

const DifficultyBtn = ({difficulty, color}: Props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDifficulty = () => {
        dispatch(setDifficulty(difficulty))
        navigate('/quiz')
    }

  return (
    <button onClick={handleDifficulty} style={{backgroundColor: color}}>{difficulty}</button>
  )
}

export default DifficultyBtn