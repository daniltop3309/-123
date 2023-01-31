import React from "react";
import AddBook from "./components/AddBook"
import Main from "./components/Main"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {

  const bookList = [
    {name:"Книга-1",opis:"Описание-1"},
    {name:"Книга-2",opis:"Описание-2"},
    {name:"Книга-3",opis:"Описание-3"},
  ]

  const [ book, setBook ] = React.useState(bookList)

  return(
  <Router>
    <Routes>
      <Route path="/" element={<Main bookList={book}/>}/>
      <Route path="/addbook" element={<AddBook bookList={book} setBook = {setBook}/>}/>
    </Routes>
  </Router>
  
  )
}

export default App;