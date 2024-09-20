import React from 'react'
import {Link}  from 'react-router-dom'

const Home2 = () => {
  return (
    <div>
      <h1>Route 1 home1</h1>
      <p><Link to={"ButtonRegister"}>Route vers la page register</Link></p>
    </div>
  )
}

export default Home2
