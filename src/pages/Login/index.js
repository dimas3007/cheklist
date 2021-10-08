import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { postLogin } from '../../config/api/checklist'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    const data = {
      username,
      password
    }

    postLogin(data).then(response => {
      localStorage.setItem("token", response.data.token); 
      history.push('/home')
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
          <label htmlFor="">Username</label>
          <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className="btn" onClick={handleRegister} >Login</button>
        <span>Belum punya akun?</span>
        <span className='link' onClick={() => history.push('/register')}>Daftar</span>
      </form>
    </Container>
  )
}

export default Login

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
