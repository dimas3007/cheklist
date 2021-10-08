import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getCheckList, addList, deleteList } from '../../config/api/checklist'

const Home = () => {
  const [check, setCheck] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    getCheckList().then(res => {
      setCheck(res.data)
    }).catch(err => console.log(err))
  }, [])

  const handleList = () => {
    addList(list).then(res => {
      setList('')
      getCheckList().then(res => {
        setCheck(res.data)
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  return (
    <Container>
      <div className="list-item">
        <div className="form">
          <div className="input-group">
            <label htmlFor="">List</label>
            <input type="text" name="list" onChange={e => setList(e.target.value)}/>
            <button className="btn" onClick={handleList} >Add List</button>
          </div>
        </div>
        {check.map((item, index) => (
          <div className="list" key={index}>
            <div className={item.checklistCompletionStatus ? 'list check' : 'list uncheck'}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  .list {
    text-transform: capitalize;
    padding: 10px;
    &.check {
      background-color: lightgreen;
    }
    &.uncheck {
      background-color: lightslategrey;
    }
  }

  .form {
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 25px;
    margin-bottom: 25px;
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
      margin: 10px;
      display: block;
      width: 100%;
      background-color: aliceblue;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid gray;
      cursor: pointer;
    }
  }
`
