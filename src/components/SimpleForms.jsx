import React from 'react'

const SimpleForms = () => {
  return (
    <>
      <div className='login'>
        <div className='login-container'>
          <img src='{logo}' alt='logo' />

          <form onSubmit={() => {}}>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='emai'
              placeholder='correogmail.com'
              id='simle-email'
              onChange={() => {}}
              value=''
            />

            <label htmlFor='password'>Pasword</label>
            <input
              type='password'
              name='pasword'
              id='simle-password'
              onChange={() => {}}
              value=''
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
