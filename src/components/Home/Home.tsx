import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  
  return (
    <div className='home__page'>
      <section className='home-main__section'>
      <h1>TRIVIA QUIZ</h1>
      <div className='home__img-container'>
        <img src="https://appsgeyser.com/blog/wp-content/uploads/2020/09/Artboard-12-2.png" alt="" />
      </div>
      <p>Trivia Quiz is a game where you can put into practice your knowledge in different areas like sports, games or just general knowledge.</p>
      <p>¡Click on the button to start!</p>
      <button onClick={() => navigate('/name')}>START</button>
      </section>
      <div className='madeBy__container'>
        <span>Made by: <a href="https://www.linkedin.com/in/christian-mendez-b8576822b/" target="_blank" title='LinkedIn Profile'>Christian M.</a></span>
      </div>
    </div>
  )
}

export default Home