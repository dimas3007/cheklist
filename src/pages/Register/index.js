import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { postRegister } from '../../config/api/checklist'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    const data = {
      email,
      username,
      password
    }

    postRegister(data).then(response => {
      history.push('/')
      setEmail('')
      setUsername('')
      setPassword('')
      console.log(response)
    }).catch(err => {
      alert('Gagal')
      console.log(err)
    })
  }

  return (
    <Container>
      <form className="form">
        <div className="input-group">
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="">Username</label>
          <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className="btn" onClick={handleRegister} >Register</button>
        <span className='link' onClick={() => history.push('/')}>Login</span>
      </form>
    </Container>
  )
}

export default Register

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 25px;
    .input-group {
      display: flex;
      flex-direction: column;
      width: 300px;

      input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
      }
    }

    .btn {
      display: block;
      width: 100%;
      background-color: aliceblue;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid gray;
      cursor: pointer;
      margin: 10px;
    }

    span {
      &.link {
        color: blue;
        cursor: pointer;
      }
    }
  }
`
