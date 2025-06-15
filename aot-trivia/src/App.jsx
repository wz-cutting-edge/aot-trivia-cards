import { useState } from 'react'
import './App.css'
import Flashcards from './components/Flashcards'
import useButtons from './hooks/useButtons'

const App = () => {
  const { card, nextCard } = useButtons()

  return (
    <div className="App">
      <div className='info'>
        <h2>AOT Trivia</h2>
        <h3>Test your Attack on Titan knowledge!</h3>
        <h4>Number of cards: 10</h4>
      </div>
      <div className='Flashcards'>
        <Flashcards currentCard={card} />
      </div>
      <div className='btns'>
        <button onClick={nextCard}>Next →</button>
      </div>
    </div>
  )
}

export default App
