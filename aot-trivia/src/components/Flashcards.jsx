import { Cards } from '../data/cards'
import useFlip from '../hooks/useFlip'

const Flashcards = ({ currentCard }) => {
  const { face, toggleFace } = useFlip()
  const card = Cards[currentCard - 1]

  return (
    <div className={`card-container ${face ? '' : 'flipped'}`} onClick={toggleFace}>
      <div className="card-front">
        <img src={card.imgFront} alt="question" />
        <p>{card.question}</p>
      </div>
      <div className="card-back">
        <img src={card.imgBack} alt="answer" />
        <p>{card.answer}</p>
      </div>
    </div>
  )
}

export default Flashcards
