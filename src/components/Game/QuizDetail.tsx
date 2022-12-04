import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { incrementByBoolean, incrementByChoice } from '../../store/slices/score.slice'
import { incrementTotalByBoolean, incrementTotalByChoice } from '../../store/slices/totalScore.slice'
import { Quiz } from '../../types'

type Props = {
  quizzes: Quiz[]|undefined,
  currentQuiz: number
}

const QuizDetail = ({quizzes, currentQuiz}: Props) => {

    const name = useSelector((state: RootState) => state.username)

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

  return (
    <section className='quiz-detail__container'>
        <div>
            <h3>Player: <span>{name}</span></h3>
            <h3>Question: {currentQuiz + 1}<span></span></h3>
        </div>
        <h2>Trivia Quiz</h2>
        <div>
          <h3>Category: {quizzes![currentQuiz].category}</h3>
          <h3>Difficulty: {quizzes![currentQuiz].difficulty}</h3>
        </div>
        <div>
          <p>Question: {quizzes![currentQuiz].question}</p>
        </div>
        <div>
          <h2>ANSWERS</h2>
          {answers.map(answer => (
            <button key={answer} onClick={(e) => handleAnswer(e)} className='answer_btn'>{answer}</button>
          ))}
          {displayAnswerMsg === 'Correct' && <span>¡{displayAnswerMsg} Answer!</span>}
          {displayAnswerMsg === 'Incorrect' && <span>{displayAnswerMsg} Answer :(</span> }
        </div>
    </section>
  )
}

export default QuizDetail