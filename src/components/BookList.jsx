import React from 'react'

import { useBookContext } from '../contexts/BookContext';
import BookItem from './BookItem';

function BookList() {
  const { books } = useBookContext();

  console.log("BOoks ------> :", books)

  return (
    <div>
      BookList
      <br />
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}

    </div>
  )
}

export default BookList
