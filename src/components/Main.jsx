import React from 'react'
import { Link } from 'react-router-dom'

function Main(bookList) {
 

    return (
    <div>
        <h1>Книги</h1>
            {bookList.bookList.map((item,index) => (
          <div key = {index}>
            <p>{item.name}</p>
            <p>{item.opis}</p><hr></hr>
          </div>
        ))} 
        <nav>
            <Link to="/addbook">Добавить книгу </Link>
        </nav>
    </div>
  )
}

export default Main