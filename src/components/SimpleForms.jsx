import React, { useState } from 'react'
import './SimpeForms.css'
import logo from '../assets/react.svg'

const SimpleForms = () => {
  const [email, setEmai] = useState('')
  const [password, setPasword] = useState('')

  return (
    <>
      <div className='login'>
        <div className='login-container'>
          <img src={logo} alt='logo' />

          <form onSubmit={() => {}}>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              className='formuInput'
              name='email'
              placeholder='correogmail.com'
              id='simle-email'
              onChange={(event) => { setEmai(event.target.value) }}
              value={email}
            />

            <label htmlFor='password'>Pasword</label>
            <input
              type='password'
              className='formuInput'
              name='pasword'
              id='simle-password'
              onChange={(event) => { setPasword(event.target.value) }}
              value={password}
            />
            <button type='submit'>
              iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SimpleForms
