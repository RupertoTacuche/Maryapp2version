import React from 'react'
import '../App.css'

const Signup = () => {
  return (
    <div className = 'sign-up-container'>
        
        <form className ='sign-up-form'>
        <h2>Sign Up</h2>
            <label htmlFor = "username">Username:</label>
            <input type="text" placeholder='Username' />

            <label htmlFor="email">Email:</label>
            <input type="email" autocomplete='off' placeholder='Email' />

            <label htmlFor="password">Password:</label>
            <input type="password" autocomplete='off' placeholder='*****' />

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup