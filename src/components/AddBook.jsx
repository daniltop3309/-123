import React from 'react'
import { Link } from 'react-router-dom'

function AddBook({ bookList, setBook }) {
  
  const [ value, setValue ] = React.useState("")
  const [ value1, setValue1 ] = React.useState("")  


  const addBook = () => {
    let book = {
      name:value, opis:value1
    }
    setBook([...bookList,book])
  }
    
  console.log(bookList)

    return(
    <div>
      <label>Введите название<br></br>
      <input value={value} onChange={event => setValue(event.target.value)}></input>
      </label><br></br>
      <label>Введите описание<br></br>
      <textarea value={value1} onChange={event => setValue1(event.target.value)}></textarea>
      </label><br></br>
      <button onClick={addBook}>Запостить</button><br></br>
      <nav>
        <Link to="/">Главная </Link>  
      </nav>
      </div>
      )
    }

export default AddBook