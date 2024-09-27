import React from 'react'

const Contact = () => {
  return (
    <div >
      <h1>Nous contacter</h1>
      <form action="" style={{ display: 'flex', flexDirection: 'column', width: '450px'}}>
        <label for="name">Name</label>
        <input type="text" name='name'/>
        <label for="email">Email</label>
        <input type="email" name='email'/>
        <label for="message">Message</label>
        <input type="text" name='message'/>
    <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
