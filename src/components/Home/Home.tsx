import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()



  return (
    <div className='home__page'>
      <section className='home-main__section'>
      <h1>TRIVIA QUIZ</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga eveniet ab facere neque laborum. Inventore excepturi quis velit exercitationem.</p>
      <button onClick={() => navigate('/name')}>START</button>
      </section>
      <div className='madeBy__container'>
        <span>Made by: <a href="https://www.linkedin.com/in/christian-mendez-b8576822b/" target="_blank">Christian M.</a></span>
      </div>

    </div>
  )
}

export default Home