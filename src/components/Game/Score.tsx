import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { resetScore } from '../../store/slices/score.slice'
import { resetTotalScore } from '../../store/slices/totalScore.slice'

const Score = () => {

  const score = useSelector((state: RootState) => state.score)

  const totalScore = useSelector((state: RootState) => state.totalScore)

  const name = useSelector((state: RootState) => state.username)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayAgain = () => {
    dispatch(resetScore())
    dispatch(resetTotalScore())
    navigate('/category')
  }

  const handleBackMenu = () => {
    dispatch(resetScore())
    dispatch(resetTotalScore())
    navigate('/')
  }

  return (
    <div>
      <span>{name}</span>
      <h2>Score:</h2>
      <span>{score}/{totalScore}</span>
      <div>
        <button onClick={handlePlayAgain}>Play again!</button>
        <button onClick={handleBackMenu}>Back to main menu!</button>
      </div>
    </div>
  )
}

export default Score