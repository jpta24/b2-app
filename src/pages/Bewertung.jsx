import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import bewertung from '../data/bewertung';

const Bewertung = () => {
    const initialState = 
        {
            "1a": '',
            "1b": '',
            "1c": '',
            "2": '',
            "3": '',
            "kii": '',
            "kiii": '',
            "kiv": ''
        
    }
    const [first, setfirst] = useState(initialState)
    
  return (
    <div>Bewertung</div>
  )
}

export default Bewertung