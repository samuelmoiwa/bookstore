import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddForm from './AddForm';

function BookList() {
  const data = useSelector((state) => state.Books);

  return (
    <div>
      {data.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <AddForm />
    </div>
  );
}

export default BookList;
