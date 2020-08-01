import React from 'react';
import { Link } from 'react-router-dom'

const Downloads = () => {
   return (
      <>
         <div className="page__downloads">
            <a href="../fileForDowloads/informacja_gosp_emendator.pdf" download>Informacja gospodarcza</a>
            <br />
            <a href="../fileForDowloads/pelnomocnictwo.pdf" download>pelnomocnictwo</a>
            <Link to="../fileForDowloads/informacja_gosp_emendator.pdf" target="_blank" download>Informacja gospodarcza</Link>
         </div>
      </>
   );
}

export default Downloads;