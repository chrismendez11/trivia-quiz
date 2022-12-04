import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import { RootState } from '../../store'
import { Quiz } from '../../types'
import QuizDetail from './QuizDetail'

const QuizGame = () => {

  const navigate = useNavigate()

  const category = useSelector((state: RootState) => state.category)
  const difficulty = useSelector((state: RootState) => state.difficulty)

  const [isDataLoading, setIsDataLoading] = useState<Boolean>(true)
  const [counter, setCounter] = useState<number>()

  const [sendQuiz, setSendQuiz] = useState<Boolean>(false)
  const [quizzes, setQuizzes] = useState<Quiz[]>()

  // current question
  const [currentQuiz, setCurrentQuiz] = useState<number>(0)

  const handleCounter = () => {
    setTimeout(() => {
      setCounter(counter => counter! - 1)
    }, 1000)
  }

  const handleCurrentQuiz = () => {
    const answerBtns: HTMLButtonElement|null = document.querySelector('.answer_btn')
    if (answerBtns!.disabled == true) {
      setCurrentQuiz(current => current + 1)
    } else {
      alert("Select an answer before moving on to the next question")
    }
  }

  const handleFinishQuizz = () => {
    const answerBtns: HTMLButtonElement|null = document.querySelector('.answer_btn')
    if (answerBtns!.disabled == true) {
      navigate('/score')
    } else {
      alert("Select an answer before finishing the quizz")
    }
  }

  useEffect(() => {
    api.quizzes.list(category, difficulty)
      .then(res => {
        setQuizzes(res)
        setIsDataLoading(false)
        setCounter(3)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (counter) {
      handleCounter()
    } else if (counter === 0) {
      setSendQuiz(true)
    }
  }, [counter])

  console.log(quizzes)

  return (
    <div className='quiz__container'>
      {isDataLoading && <h2>loading...</h2>}
      {Boolean(counter) && <span>{counter}</span>}
      {sendQuiz && <QuizDetail quizzes={quizzes} currentQuiz={currentQuiz}/>}
      {sendQuiz && currentQuiz < quizzes!.length - 1 && <button onClick={handleCurrentQuiz}>Next Question</button>}
      {quizzes && currentQuiz === quizzes!.length - 1  && <button onClick={handleFinishQuizz}>Finish Quiz</button>}
    </div>
  )
}

export default QuizGame

