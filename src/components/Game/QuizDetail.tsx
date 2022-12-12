import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { incrementByBoolean, incrementByChoice } from '../../store/slices/score.slice'
import { incrementTotalByBoolean, incrementTotalByChoice } from '../../store/slices/totalScore.slice'
import { Quiz } from '../../types'

type Props = {
  quizzes: Quiz[] | undefined,
  currentQuiz: number
}

const QuizDetail = ({ quizzes, currentQuiz }: Props) => {

  const name = useSelector((state: RootState) => state.username)
  const colors = ["#ba181b", "#0466c8", "#52b788", "#ffd60a"]

  const [answers, setAnswers] = useState<Array<string>>([])
  const [displayAnswerMsg, setDisplayAnswerMsg] = useState<string>('')

  const dispatch = useDispatch()

  const handleAnswers = () => {
    const randomIndex = Math.floor(Math.random() * quizzes![currentQuiz].incorrect_answers.length)
    quizzes![currentQuiz].incorrect_answers.splice(randomIndex, 0, quizzes![currentQuiz].correct_answer)
    setAnswers(quizzes![currentQuiz].incorrect_answers)
  }

  useEffect(() => {
    handleAnswers()
    const answerBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.answer_btn')
    answerBtns.forEach((btn: HTMLButtonElement) => {
      btn.disabled = false;
    });
    setDisplayAnswerMsg('')
    handleSetQuestion()
  }, [currentQuiz])

  const handleAnswer = (e: any) => {
    if (quizzes![currentQuiz].correct_answer == 'True' || quizzes![currentQuiz].correct_answer == 'False') {
      if (e.target.textContent === quizzes![currentQuiz].correct_answer) {
        dispatch(incrementByBoolean())
        setDisplayAnswerMsg('Correct')
      } else {
        setDisplayAnswerMsg('Incorrect')
      }
      dispatch(incrementTotalByBoolean())
    } else {
      if (e.target.textContent === quizzes![currentQuiz].correct_answer) {
        dispatch(incrementByChoice())
        setDisplayAnswerMsg('Correct')
      } else {
        setDisplayAnswerMsg('Incorrect')
      }
      dispatch(incrementTotalByChoice())
    }
    const answerBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.answer_btn')
    answerBtns.forEach((btn: HTMLButtonElement) => {
      btn.disabled = true;
    });
  }

  const handleSetQuestion = () => {
    document.getElementById('question')!.innerHTML = quizzes![currentQuiz].question
  }

  return (
    <>
      <div className='playerNameQuestion__container'>
        <h2>Player: <span>{name}</span></h2>
        <h2>Question: <span>{currentQuiz + 1}</span></h2>
      </div>
      <section className='quiz-detail__container'>
        <h2>Trivia Quiz</h2>
        <div className='category-difficulty__container'>
          <h3>Category: <span>{quizzes![currentQuiz].category}</span></h3>
          <h3>Difficulty: <span>{quizzes![currentQuiz].difficulty}</span></h3>
        </div>
        <div className='question__container'>
          <p>Question: <span id='question'></span></p>
        </div>
        <div className='answers-btn__container'>
          {answers.map((answer, index) => (
            <button key={answer} onClick={(e) => handleAnswer(e)} className='answer_btn' style={{ backgroundColor: colors[index] }}>{answer}</button>
          ))}
        </div>
        <div className='answer-msg__container'>
          {displayAnswerMsg === 'Correct' && <span style={{color: "#2dc653"}}>¡{displayAnswerMsg} Answer!</span>}
          {displayAnswerMsg === 'Incorrect' && <span style={{color: "#dc2f02"}}>{displayAnswerMsg} Answer :(</span>}
        </div>
      </section>
    </>
  )
}

export default QuizDetail