/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';

const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [])

  function deleteItem(id) {
    const bookIndex = books.findIndex(book => book.id === id);
    books.splice(bookIndex, 1);
    setBooks([...books]);
  }

  return (
    <BookContext.Provider
      value={{
        books,
        deleteItem,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => React.useContext(BookContext)