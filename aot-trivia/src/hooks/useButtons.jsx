import { useState } from 'react'

const useButtons = () => {
    const [card, setCard] = useState(1)

    const nextCard = () => {
        setCard(prevCard => {
            let randomIncrement = Math.floor(Math.random() * 9) + 1
            let nextCard = ((prevCard + randomIncrement - 1) % 10) + 1
            return nextCard
        })
    }

    return { card, nextCard }
}

export default useButtons