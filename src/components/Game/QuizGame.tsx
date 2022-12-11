import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import api from '../../api'
import { RootState } from '../../store'
import { Quiz } from '../../types'
import CounterLoader from './Loaders/CounterLoader'
import DataLoader from './Loaders/DataLoader'
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
    <div className='quiz__page'>
      {isDataLoading && <DataLoader />}
      {Boolean(counter) && <CounterLoader counter={counter} />}
      <div className='quiz-detail__content'>
      {sendQuiz && <QuizDetail quizzes={quizzes} currentQuiz={currentQuiz}/>}
      <div className='next-questions__containers'>
      {sendQuiz && currentQuiz < quizzes!.length - 1 && <button onClick={handleCurrentQuiz}>Next question <i className="fa-solid fa-arrow-right"></i></button>}
      {quizzes && currentQuiz === quizzes!.length - 1  && <button onClick={handleFinishQuizz}>Finish quiz <i className="fa-solid fa-arrow-right"></i></button>}
      </div>
      </div>
    </div>
  )
}

export default QuizGame

