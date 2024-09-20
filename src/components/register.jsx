import React from 'react'
import {Link} from "react-router-dom"
const register = () => {
  return (
    <div>
     <p><Link to={"/register"}>Route vers la page s'enregistrer</Link></p>
    </div>
  )
}

export default register
