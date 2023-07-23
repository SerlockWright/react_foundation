/* eslint-disable react/prop-types */
import React from 'react'

import { useBookContext } from '../contexts/BookContext';

import Button from './Button';


function BookItem({ book }) {
  const {  deleteItem } = useBookContext();

  return (
    <div>
      {book.title} <br />

      <Button
        buttonText='Delete'
        onClick={() => deleteItem(book.id)}
      />
    </div>
  )
}

export default BookItem