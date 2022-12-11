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
    <div className='score__page'>
      <div className='playerName__container'>
        <h2>Player: <span>{name}</span></h2>
      </div>
      <div className='score__container'>
        <h2>TRIVIA QUIZ</h2>
        <p>Your score was:</p>
        <span><span>{score}</span>/{totalScore}</span>
        <button className='playAgain__btn' onClick={handlePlayAgain}>Play again</button>
        <button className='menu__btn' onClick={handleBackMenu}>Back to main menu</button>
      </div>
    </div>
  )
}

export default Score