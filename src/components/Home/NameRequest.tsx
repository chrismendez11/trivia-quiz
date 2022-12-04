import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setName } from '../../store/slices/username.slice'

const NameRequest = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNameSubmit = (e: any) => {
    e.preventDefault()
    dispatch(setName(e.target.name.value.trim()))
    navigate('/category')

    e.target.name.value = ''
  }


  return (
    <div className='nameRequest__page'>
      <section>
        <h2>TRIVIA QUIZ</h2>
        <p>Let's get started! Type your name to start.</p>
        <form onSubmit={handleNameSubmit}>
          <input type="text" id='name' />
          <button>START</button>
        </form>
      </section>
    </div>
  )
}

export default NameRequest