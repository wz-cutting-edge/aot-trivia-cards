import { useState } from 'react'

const useFlip = () => {
    const [face, setFace] = useState(true)
    
    const toggleFace = () => {
        setFace(prevFace => !prevFace)
    }

    return {
        face,
        toggleFace
    }
}

export default useFlip
